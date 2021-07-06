import { BaseModel } from '../models/base'
import { ModelClass, QueryBuilder, QueryBuilderYieldingOneOrNone, Transaction } from 'objection'

export interface PaginationOptions {
  page: number
  pageSize: number
}

export interface OrderOptions {
  column: string
  direction: 'asc' | 'desc'
}

export class BaseRepository<T extends BaseModel> {
  public model: ModelClass<T>
  protected transaction?: Transaction;

  public constructor(model: ModelClass<T>, transaction?: Transaction) {
    this.model = model
    this.transaction = transaction
  }

  public query(): QueryBuilder<T> {
    return this.model.query(this.transaction)
  }

  public insert(data: object): QueryBuilder<T, T, T> {
    return this.query().insertAndFetch(data)
  }

  public insertMany(data: object[]): QueryBuilder<T, T[], T[]> {
    return this.query().insert(data)
  }

  public findAll(excludingDeleted: Boolean = true): QueryBuilder<T, T[], T[]> {
    const query = this.query()
    return excludingDeleted ? query.where({ deletedAt: null }) : query
  }

  public findById(id: number): QueryBuilderYieldingOneOrNone<T> {
    return this.query().where({ deletedAt: null }).findById(id)
  }

  public patchById(id: number, data: object): QueryBuilder<T, T, T> {
    return this.query().updateAndFetchById(id, data)
  }

  public deleteById(id: number): QueryBuilder<T, T, T> {
    return this.patchById(id, { deletedAt: new Date() })
  }
}