import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as compression from 'compression';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { json, urlencoded } from 'express';

export class MainConfig {
  appUse(app: INestApplication) {
    app.use(compression());
    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(new ValidationPipe({ errorHttpStatusCode: 422 }));
    app.use(json({ limit: '50mb' }));
    app.use(urlencoded({ extended: true, limit: '50mb' }));
    app.enableCors({
      origin: '*',
      credentials: true,
      allowedHeaders: '*',
    });
  }

  setDocumentation(app: INestApplication) {
    const config = new DocumentBuilder()
      .setTitle('API documentation for Sell Car')
      .setDescription(
        'Documentation interface and use of API in general of sell Car.',
      )
      .setVersion('1.0')
      .addTag('cats')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
  }
}
