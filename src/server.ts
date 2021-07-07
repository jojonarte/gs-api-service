require('module-alias/register')
import * as dotenv from 'dotenv';
import Application from 'src/app';
import { logger } from './utils/logger';

dotenv.config();

const initialize = async () => {
  const appInstance = new Application()
  appInstance.start().catch(Application.fatal);
};

const server = initialize().catch(logger.error);

export default server;
