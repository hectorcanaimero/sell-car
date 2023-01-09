import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MainConfig } from './main.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const mainConfig = new MainConfig();
  mainConfig.appUse(app);
  mainConfig.setDocumentation(app);
  await app.listen(3000);
}
bootstrap();
