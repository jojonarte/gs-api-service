import { NotFoundError } from 'objection';
import { phoneRepository } from 'src/database/repositories/phones';
import { Operation, OperationOutput } from 'src/operations/operation';

interface OperationInput {
  phoneId: number;
}

class DeletePhone extends Operation<OperationInput, OperationOutput> {
  protected async run(requestData: OperationInput): Promise<OperationOutput> {
    if (await phoneRepository.findById(requestData.phoneId)) {
      await phoneRepository.deleteById(requestData.phoneId);

      return {
        success: true,
        data: null
      }
    }

    throw new NotFoundError();
  }
}

export const deletePhone = new DeletePhone();