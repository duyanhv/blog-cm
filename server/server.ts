import * as express from 'express';
import { bootstrapNextjs } from '../nextjs/bootstrapNextjs';
import { bootstrapApi } from '../src/api/bootstrapApi';
// import { bootstrapApi } from '../src/api/bootstrapApi';

const bootstrap = async () => {
  const port = parseInt(process.env.PORT, 10) || 3000;
  const server = express();

  await bootstrapNextjs(server);
  const app = await bootstrapApi(server);

  app.listen(port);

  process.on('SIGINT', () => {
    /* tslint:disable-next-line:no-console */
    console.log(`\nShutting down the server...Goodbye.\n`);
    process.exit();
  });
};

bootstrap();