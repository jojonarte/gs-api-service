import { Context } from 'koa';
import compose from 'koa-compose';
import { listPhones } from 'src/operations/v1/phones/get-list';

export const getPhones = compose([async (ctx: Context) => {
  ctx.ok(await listPhones.execute({}))
}]);
