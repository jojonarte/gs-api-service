import { Knex } from 'knex';
import { knexSnakeCaseMappers } from 'objection';
import { config } from '.';

const defaultOptions: Knex.Config = {
  debug: false,
  client: 'postgresql',
  connection: config.database.url,
  ...knexSnakeCaseMappers(),
  seeds: {
    directory: '../database/seeds',
  },
  migrations: {
    directory: '../database/migrations'
  }
}

const knexConfig: KnexFileEnv = {
  local: {
    ...defaultOptions
  },
  development: {
    ...defaultOptions
  }
}

export interface KnexFileEnv {
  local: Knex.Config
  development: Knex.Config
  [index: string]: Knex.Config
}

module.exports = knexConfig