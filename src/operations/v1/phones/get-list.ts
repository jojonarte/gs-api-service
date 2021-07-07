import { Operation } from 'src/operations/operation';
import { phoneRepository } from 'src/database/repositories/phones';

interface PhoneOutput {
  id: number;
  name: string;
  manufacturer: string;
  description: string;
  color: string;
  price: number;
  imageFileName: string;
  screen: string;
  processor: string;
  ram: string;
}

interface OperationOutput {
  success: boolean,
  data: {
    results: PhoneOutput[]
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