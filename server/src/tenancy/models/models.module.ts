import { Module } from '@nestjs/common';
import { ModelsService } from './models.service';
import { ModelsController } from './models.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Models, ModelsSchema } from '@tenancy/models/entities/model.entity';

@Module({
  controllers: [ModelsController],
  providers: [ModelsService],
  imports: [
    MongooseModule.forFeature([{ name: Models.name, schema: ModelsSchema }]),
  ],
})
export class ModelsModule {}
