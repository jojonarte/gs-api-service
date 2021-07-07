import { Phone } from 'src/database/models/phone';
import { phoneRepository } from 'src/database/repositories/phones';
import { Operation, OperationOutput } from 'src/operations/operation';

interface OperationInput extends Partial<Phone> { }

class CreatePhone extends Operation<OperationInput, OperationOutput> {
  public async run(requestData: OperationInput): Promise<OperationOutput> {
    const insertResult = await phoneRepository.insert(requestData);

    return {
      success: true,
      data: insertResult
    }

  }
}

export const createPhone = new CreatePhone();