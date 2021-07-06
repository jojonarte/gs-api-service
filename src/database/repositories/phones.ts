import { Phone } from 'src/database/models/phone';
import { BaseRepository, OrderOptions, PaginationOptions } from 'src/database/repositories/base'
import { Transaction } from 'objection';

export interface PhoneOrderOptions extends OrderOptions {
  column: 'id' | 'createdAt'
}

export interface FilterOptions {
  order: PhoneOrderOptions
  pagination: PaginationOptions
}

export class PhoneRepository extends BaseRepository<Phone> {
  public constructor(transaction?: Transaction) {
    super(Phone, transaction);
  }
}

export const phoneRepository = new PhoneRepository();