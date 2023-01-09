import { Module } from '@nestjs/common';
import { SacsService } from './sacs.service';
import { SacsController } from './sacs.controller';

@Module({
  controllers: [SacsController],
  providers: [SacsService]
})
export class SacsModule {}
