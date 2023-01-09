import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SacsService } from './sacs.service';
import { CreateSacDto } from './dto/create-sac.dto';
import { UpdateSacDto } from './dto/update-sac.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('sacs')
@ApiTags('sacs')
export class SacsController {
  constructor(private readonly sacsService: SacsService) {}

  @Post()
  create(@Body() createSacDto: CreateSacDto) {
    return this.sacsService.create(createSacDto);
  }

  @Get()
  findAll() {
    return this.sacsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sacsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSacDto: UpdateSacDto) {
    return this.sacsService.update(+id, updateSacDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sacsService.remove(+id);
  }
}
