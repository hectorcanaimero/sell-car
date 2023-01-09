import { Module } from '@nestjs/common';
import { TypeVehiclesService } from './type-vehicles.service';
import { TypeVehiclesController } from './type-vehicles.controller';

@Module({
  controllers: [TypeVehiclesController],
  providers: [TypeVehiclesService]
})
export class TypeVehiclesModule {}
