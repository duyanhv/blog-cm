import * as express from 'express';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupApiDocumentation } from './core/swagger/swagger';
import { setupLogger } from './core/logger/log4js';
import { AuthorizeGuard } from './core/auth/authorize.guard';
import { GlobalExceptionFilter } from './core/exceptions/global-filter.exception';
import config from './config';

const bootstrapApi = async (server: express.Express) => {
    const app = await NestFactory.create(AppModule, server, {
        cors: {
            origin: config.app.corsUrls,
        },
    });

    // set prefix for url
    app.setGlobalPrefix(config.app.prefix);

    // catch exceptions
    app.useGlobalFilters(new GlobalExceptionFilter());

    // use Guard
    const reflector = new Reflector();
    app.useGlobalGuards(new AuthorizeGuard(reflector));

    // make api documentation
    setupApiDocumentation(app, server);

    // setup logger
    setupLogger();

    return app;
};

export { bootstrapApi };