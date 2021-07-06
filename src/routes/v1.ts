import Router from 'koa-router';
import * as controllers from 'src/controllers';

const mainRouter = new Router({ prefix: '/api/v1' });

mainRouter.get('/phones', controllers.phonesController.getPhones);

export default mainRouter.routes();