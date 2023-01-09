import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeVehiclesService } from './type-vehicles.service';
import { CreateTypeVehicleDto } from './dto/create-type-vehicle.dto';
import { UpdateTypeVehicleDto } from './dto/update-type-vehicle.dto';

@Controller('type-vehicles')
export class TypeVehiclesController {
  constructor(private readonly typeVehiclesService: TypeVehiclesService) {}

  @Post()
  create(@Body() createTypeVehicleDto: CreateTypeVehicleDto) {
    return this.typeVehiclesService.create(createTypeVehicleDto);
  }

  @Get()
  findAll() {
    return this.typeVehiclesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeVehiclesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeVehicleDto: UpdateTypeVehicleDto) {
    return this.typeVehiclesService.update(+id, updateTypeVehicleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeVehiclesService.remove(+id);
  }
}
