import * as express from 'express';
import { bootstrapNextjs } from '../nextjs/bootstrapNextjs';
import { bootstrapApi } from '../api/bootstrapApi';

const bootstrap = async () => {
  const port = parseInt(process.env.PORT ? process.env.PORT : '', 10) || 3000;
  const server = express();

  await bootstrapNextjs(server);
  const app = await bootstrapApi(server);

  await app.listen(port);

  process.on('SIGINT', () => {
    /* tslint:disable-next-line:no-console */
    console.log(`\nShutting down the server...Goodbye.\n`);
    process.exit();
  });
};

bootstrap();