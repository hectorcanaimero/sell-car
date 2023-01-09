import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TypeVehiclesService } from './type-vehicles.service';
import { CreateTypeVehicleDto } from './dto/create-type-vehicle.dto';
import { UpdateTypeVehicleDto } from './dto/update-type-vehicle.dto';

@Controller('type-vehicles')
export class TypeVehiclesController {
  constructor(private readonly typeVehiclesService: TypeVehiclesService) {}

  @Post()
  create(@Body() item: CreateTypeVehicleDto) {
    return this.typeVehiclesService.create(item);
  }

  @Get()
  findAll() {
    return this.typeVehiclesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeVehiclesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() item: UpdateTypeVehicleDto) {
    return this.typeVehiclesService.update(id, item);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeVehiclesService.remove(id);
  }
}
