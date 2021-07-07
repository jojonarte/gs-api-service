import { Context, DefaultState } from 'koa';
import Router from 'koa-router';
import * as controllers from 'src/controllers';

const mainRouter = new Router<DefaultState, Context>({ prefix: '/api/v1' });

mainRouter.get('/phones', controllers.phonesController.getPhones);

export default mainRouter.routes();