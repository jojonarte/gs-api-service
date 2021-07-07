import { Context } from 'koa'
import config from 'src/config/default'
import { ApiError } from 'src/utils/errors'
import { logger } from 'src/utils/logger'

interface IKnownError {
  success: boolean,
  type: string
  message: string
  errors?: {
    [propName: string]: any // eslint-disable-line @typescript-eslint/no-explicit-any
  }
}

interface ParsedRequest {
  body: any
  headers: any
  method: string
  url: string
}

const request = (ctx: Context): ParsedRequest => ({
  body: ctx.body,
  headers: ctx.request.headers,
  method: ctx.request.method,
  url: ctx.request.url,
})

const processKnownError = (ctx: Context, err: ApiError): void => {
  logger.warn({
    err,
    req: request(ctx),
    res: ctx.response,
  }, 'Handled error')

  const body: IKnownError = {
    success: false,
    message: err.message,
    type: err.type,
  }
  ctx.status = err.statusCode || 500
  ctx.body = body
}


const processUnknownError = (ctx: Context, err: Error): void => {
  logger.error({
    err,
    req: request(ctx),
    res: ctx.response,
  }, 'Unhandled error')

  ctx.status = 500

  if (config.env === 'production') {
    ctx.body = {
      success: false,
      message: 'Unknown error occurred.',
    }
  } else {
    ctx.body = {
      success: false,
      message: err.message,
      stacktrace: err.stack,
    }
  }
}

export const handleErrors = async (ctx: Context, middleware: () => Promise<void>): Promise<void> => {
  try {
    await middleware()
  } catch (err) {
    if (err instanceof ApiError) {
      processKnownError(ctx, err)
    } else {
      processUnknownError(ctx, err)
    }
  }
}
