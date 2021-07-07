declare module 'knex' {
  namespace Knex {
    interface QueryBuilder {
      paginate<TResult = any[]>(params: IPaginateParams): KnexQB<any, IWithPagination<TResult>>;
    }
  }
}

export = Knex;