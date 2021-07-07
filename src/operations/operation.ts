import { removeSensitiveAttributes } from 'src/utils/helpers'
import { logger } from 'src/utils/logger'

export interface OperationOutput {
  success: boolean;
  message?: string;
  data: any;
}

export abstract class Operation<T, U> {
  protected validationSchema: object

  public async execute(inputData: T): Promise<U> {
    logger.info(`(${this.constructor.name}) - START EXECUTING... with payload:${JSON.stringify(removeSensitiveAttributes(inputData as unknown as object, ['a']))}`);

    const startTime = Date.now();
    try {
      const result = await this.run(inputData);
      logger.info(`(${this.constructor.name}) - DONE (${Date.now() - startTime} ms)`)
      return result
    } catch (err) {
      logger.error(`(${this.constructor.name}) - ERROR ${err.type ? err.type : 'UnknownError'} (${Date.now() - startTime} ms)`)
      throw err
    }
  }

  protected abstract run(inputData: T): Promise<U>
}
