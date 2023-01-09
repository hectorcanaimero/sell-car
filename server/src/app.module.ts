import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppService } from './app.service';
import { CoreModule } from '@core/core.module';
import { AppController } from './app.controller';
import { MasterModule } from '@master/master.module';
import { TenancyModule } from '@tenancy/tenancy.module';
import { MongooseConfigService } from '@core/database/mongo-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_DSN1, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    // MongooseModule.forRootAsync({
    //   useClass: MongooseConfigService,
    // }),
    CoreModule,
    MasterModule,
    TenancyModule,
  ],
  controllers: [AppController],
  providers: [AppService, MongooseConfigService],
})
export class AppModule {}
