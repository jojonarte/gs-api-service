import knex, { Knex } from 'knex';
import { Model } from 'objection';
import { config } from 'src/config';
import { KnexFileEnv } from 'src/config/knexfile';
import { logger } from 'src/utils/logger';

const knexConfig: KnexFileEnv = require('../config/knexfile')

interface QueryData {
  sql: string
  bindings: string
}

export const initializeDb = (): Knex => {
  if (!knexConfig.hasOwnProperty(config.env)) {
    throw new Error(`Your knexfile is missing ${config.env}`)
  }

  const knexInstance = knex(knexConfig[config.env])

  knexInstance.on('query', (queryData: QueryData) => {
    logger.debug({ sql: queryData.sql, params: queryData.bindings }, 'DB');
  })

  Model.knex(knexInstance);

  logger.info('DB connection initialized')

  return knexInstance;
}