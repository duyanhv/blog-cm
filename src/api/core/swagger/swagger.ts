import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import config from '../../config';

const setupApiDocumentation = (app: INestApplication, server: any) => {
  const swaggerConfig = config.swagger;
  const options = new DocumentBuilder()
    .setTitle(swaggerConfig.title)
    .setDescription(swaggerConfig.description)
    .setVersion(swaggerConfig.version)
    .setBasePath(swaggerConfig.basePath)
    .setSchemes('http', 'https')
    .addBearerAuth('Authorization', 'header')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(swaggerConfig.url, app, document);
  server.use(swaggerConfig.jsonUrl, (_req, res, _next) => res.send(document));

  if (swaggerConfig.setHomeAsApiDoc) {
    // redirect default to api docs
    server.get('/', (_req, res) => {
      res.status(301).redirect(swaggerConfig.url);
    });
  }
};

export { setupApiDocumentation };
