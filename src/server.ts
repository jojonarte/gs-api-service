import * as dotenv from 'dotenv';
import 'module-alias/register';

dotenv.config();
import app from 'src/app';

const PORT = process.env.PORT || 3002;

const initialize = async () => {
  const server = app
    .listen(PORT, async () => {
      // tslint:disable-next-line: no-console
      console.log(`API Server listening on port: ${PORT}`);
    })
    .on('error', (err: Error) => {
      // tslint:disable-next-line: no-console
      console.error(err);
    });

  return server;
};

const server = initialize().catch((err) => {
  // tslint:disable-next-line: no-console
  console.error(err);
});

export default server;
