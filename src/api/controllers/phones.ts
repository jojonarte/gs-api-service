import { Context } from 'koa';
import compose from 'koa-compose';
import { validate } from 'src/api/middlewares/controller-validation';
import * as schema from 'src/api/validations/schema/phones'
import { Phone } from 'src/database/models/phone';
import { createPhone } from 'src/operations/v1/phones/create';
import { deletePhone } from 'src/operations/v1/phones/delete';
import { listPhones } from 'src/operations/v1/phones/get-list';
import { InternalServerError } from 'src/utils/errors';

export const getPhones = async (ctx: Context) => {
  ctx.ok(await listPhones.execute({}))
};

export const insertPhone = compose([
  validate({ body: schema.create }),
  async (ctx: Context) => {
    ctx.created(await createPhone.execute(ctx.request.body as Partial<Phone>))
  }
])

export const removePhone = compose([
  validate({ params: schema.deletePhone }),
  async (ctx: Context) => {
    const phoneId = Number(ctx.params.phoneId);
    try {
      return ctx.noContent(await deletePhone.execute({ phoneId }))
    } catch (error) {
      throw new InternalServerError();
    }
  }
])