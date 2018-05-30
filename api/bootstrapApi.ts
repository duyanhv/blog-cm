import * as express from 'express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const bootstrapApi = async (server: express.Express) => {
    const app = await NestFactory.create(AppModule, server, {
        cors: true,
    });

    // set prefix for url
    app.setGlobalPrefix('api');

    return app;
};

export { bootstrapApi };