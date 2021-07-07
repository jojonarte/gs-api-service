import { ErrorObject } from 'ajv'
import { Context } from 'koa'
import qs from 'qs';
import { isEmpty, isNil } from 'ramda'
import { InvalidRequestBodyError, InvalidRequestParamsError, InvalidRequestQueryStringError } from 'src/utils/errors'
import { validator } from 'src/utils/validator'

enum ValidationTypes {
  body,
  queryString,
  params
}
interface ValidationSchema {
  body?: object
  query?: object
  params?: object
}

const controllerValidator = (object: any, schema: object, type = ValidationTypes.body): void => {
  const valid = validator.validate(schema, object)

  if (valid) {
    return
  }

  const err = isNil(validator.errors) && isEmpty(validator.errors) ? [] : validator.errors! as ErrorObject[]

  switch (type) {
    case ValidationTypes.params:
      throw new InvalidRequestParamsError('Invalid request params', err);
    case ValidationTypes.queryString:
      throw new InvalidRequestQueryStringError('Invalid request queryString', err);
    default:
      throw new InvalidRequestBodyError('Invalid request body', err);
  }
}

export const validate = (schema: ValidationSchema): any => async (ctx: Context, middleware: any): Promise<any> => {
  ctx.valid = {};

  if (schema.body) {
    await controllerValidator(ctx.request.body, schema.body);
  }

  if (schema.query) {
    const parsedQuery = qs.parse(ctx.querystring)
    await controllerValidator(parsedQuery, schema.query, ValidationTypes.queryString);
  }

  if (schema.params) {
    await controllerValidator(ctx.params, schema.params, ValidationTypes.params);
  }

  await middleware();
}