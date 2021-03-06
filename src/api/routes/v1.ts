import { Context, DefaultState } from 'koa';
import Router from 'koa-router';
import * as controllers from 'src/api/controllers';

const mainRouter = new Router<DefaultState, Context>({ prefix: '/api/v1' });

mainRouter.get('/phones', controllers.phonesController.getPhones);
mainRouter.post('/phones', controllers.phonesController.insertPhone);
mainRouter.patch('/phones', controllers.phonesController.updatePhone)
mainRouter.delete('/phones/:phoneId', controllers.phonesController.removePhone);


export default mainRouter.routes();