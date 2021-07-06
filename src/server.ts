import * as dotenv from 'dotenv';
import 'module-alias/register';
import Application from 'src/app';
import { logger } from './utils/logger';

dotenv.config();

const initialize = async () => {
  const appInstance = new Application()
  appInstance.start().catch(Application.fatal);
};

const server = initialize().catch(logger.error);

export default server;
