import { Context } from 'koa';
import { listPhones } from 'src/operations/v1/phones/get-list';

export const getPhones = async (ctx: Context) => {
  ctx.ok(await listPhones.execute({}))
  // return response.status(200).json({
  //   success: true,
  //   message: 'Success',
  //   data: [
  //     {
  //       id: 0,
  //       name: 'iPhone 7',
  //       manufacturer: 'Apple',
  //       description: 'lorem ipsum',
  //       color: 'black',
  //       price: 769,
  //       imageFileName: 'iPhone_7.png',
  //       screen: '4.7 inch IPS',
  //       processor: 'A10 Fusion',
  //       ram: '2GB'
  //     }
  //   ]
  // })
};
