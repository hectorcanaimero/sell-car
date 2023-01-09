import { Module } from '@nestjs/common';
import { SacsModule } from './sacs/sacs.module';
import { LeadsModule } from './leads/leads.module';
import { BrandsModule } from './brands/brands.module';
import { ModelsModule } from './models/models.module';
import { ConfigsModule } from './configs/configs.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { TypeVehiclesModule } from './type-vehicles/type-vehicles.module';

@Module({
  imports: [
    TypeVehiclesModule,
    BrandsModule,
    SacsModule,
    LeadsModule,
    ModelsModule,
    ConfigsModule,
    VehiclesModule,
  ],
})
export class TenancyModule {}
