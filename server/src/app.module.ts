import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppService } from './app.service';
import { CoreModule } from '@core/core.module';
import { AppController } from './app.controller';
import { MasterModule } from '@master/master.module';
import { TenancyModule } from '@tenancy/tenancy.module';
import { DatabaseModule } from '@core/database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    CoreModule,
    MasterModule,
    TenancyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
