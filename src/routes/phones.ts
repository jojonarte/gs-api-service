import { Router } from 'express';
import { getPhones } from 'src/controllers/phones';

const phonesRouter = Router();

phonesRouter.get('/', getPhones);

export default phonesRouter;