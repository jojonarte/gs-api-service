import Ajv from 'ajv'

const initValidator = (): Ajv => {
  return new Ajv({ allErrors: true })
}

export const validator = initValidator()
