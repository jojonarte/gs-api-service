import { Context } from 'koa';
import compose from 'koa-compose';
import { validate } from 'src/api/middlewares/controller-validation';
import * as schema from 'src/api/validations/schema/phones'
import { Phone } from 'src/database/models/phone';
import { createPhone } from 'src/operations/v1/phones/create';
import { listPhones } from 'src/operations/v1/phones/get-list';

export const getPhones = async (ctx: Context) => {
  ctx.ok(await listPhones.execute({}))
};

export const insertPhone = compose([
  validate({ body: schema.create }),
  async (ctx: Context) => {
    ctx.created(await createPhone.execute(ctx.request.body as Partial<Phone>))
  }
])