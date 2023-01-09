import { Injectable } from '@nestjs/common';
import { CreateTypeVehicleDto } from './dto/create-type-vehicle.dto';
import { UpdateTypeVehicleDto } from './dto/update-type-vehicle.dto';

@Injectable()
export class TypeVehiclesService {
  create(createTypeVehicleDto: CreateTypeVehicleDto) {
    return 'This action adds a new typeVehicle';
  }

  findAll() {
    return `This action returns all typeVehicles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeVehicle`;
  }

  update(id: number, updateTypeVehicleDto: UpdateTypeVehicleDto) {
    return `This action updates a #${id} typeVehicle`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeVehicle`;
  }
}
