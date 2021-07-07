import { Operation } from 'src/operations/operation';
import { phoneRepository } from 'src/database/repositories/phones';
import { Phone } from 'src/database/models/phone';


interface OperationOutput {
  success: boolean,
  data: {
    results: Partial<Phone>[]
    total: number
  }
}

class ListPhones extends Operation<{}, OperationOutput> {
  protected async run(): Promise<OperationOutput> {
    const phones = await phoneRepository.findAll(true);

    return {
      success: true,
      data: {
        total: phones.length,
        results: phones
      }
    }
  }
}

export const listPhones = new ListPhones();