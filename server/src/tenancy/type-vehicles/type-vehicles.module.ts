import { Module } from '@nestjs/common';
import { TypeVehiclesService } from './type-vehicles.service';
import { TypeVehiclesController } from './type-vehicles.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeVehicle, TypeVehicleSchema } from './entities/type-vehicle.entity';

@Module({
  controllers: [TypeVehiclesController],
  providers: [TypeVehiclesService],
  imports: [
    MongooseModule.forFeature([
      { name: TypeVehicle.name, schema: TypeVehicleSchema },
    ]),
  ],
})
export class TypeVehiclesModule {}
