import * as Ajv from 'ajv'

export class ApiError extends Error {
  public statusCode: number
  public type: string
  public errors?: Ajv.ErrorObject[]

  public constructor(type: string, message: string, statusCode?: number) {
    super(message)

    Error.captureStackTrace(this, this.constructor)

    this.name = this.constructor.name
    this.type = type
    this.statusCode = Number(statusCode || 500)
  }
}

export class ValidationError extends ApiError {
  public constructor(type: string, message: string, errors?: Ajv.ErrorObject[]) {
    super(type, message, 422)

    if (errors) {
      this.errors = errors
    }
  }
}

export class InvalidRequestBodyError extends ValidationError {
  public constructor(message: string, errors?: Ajv.ErrorObject[]) {
    super('E_INVALID_BODY', message, errors)
  }
}

export class InvalidRequestParamsError extends ValidationError {
  public constructor(message: string, errors?: Ajv.ErrorObject[]) {
    super('E_INVALID_PARAMS', message, errors)
  }
}

export class InvalidRequestQueryStringError extends ValidationError {
  public constructor(message: string, errors?: Ajv.ErrorObject[]) {
    super('E_INVALID_QUERY_STRING', message, errors)
  }
}