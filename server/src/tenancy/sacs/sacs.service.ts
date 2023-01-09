import { Injectable } from '@nestjs/common';
import { CreateSacDto } from './dto/create-sac.dto';
import { UpdateSacDto } from './dto/update-sac.dto';

@Injectable()
export class SacsService {
  create(createSacDto: CreateSacDto) {
    return 'This action adds a new sac';
  }

  findAll() {
    return `This action returns all sacs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sac`;
  }

  update(id: number, updateSacDto: UpdateSacDto) {
    return `This action updates a #${id} sac`;
  }

  remove(id: number) {
    return `This action removes a #${id} sac`;
  }
}
