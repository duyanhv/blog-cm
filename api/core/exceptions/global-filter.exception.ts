import { ExceptionFilter, Catch } from '@nestjs/common';
import logger from '../logger/log4js';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, response: any): any {
    logger.error(
      `${exception.message || exception.response} ${exception.stack}`,
    );
    if (exception && Number.isInteger(exception.status)) {
      response
        .status(exception.status)
        .send(exception.message || exception.response);
      return;
    }

    response.status(500).send(`Internal Server error`);
  }
}
