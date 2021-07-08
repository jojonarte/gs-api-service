import { NotFoundError } from 'objection';
import { Phone } from 'src/database/models/phone';
import { phoneRepository } from 'src/database/repositories/phones';
import { Operation, OperationOutput } from 'src/operations/operation';


interface OperationInput extends Partial<Phone> {
  id: number;
}

class PatchPhone extends Operation<OperationInput, OperationOutput> {
  protected async run(requestData: OperationInput): Promise<OperationOutput> {
    if (await phoneRepository.findById(requestData.id)) {
      await phoneRepository.patchById(requestData.id, requestData);

      return {
        success: true,
        data: requestData
      }
    }

    throw new NotFoundError();
  }
}

export const patchPhone = new PatchPhone();