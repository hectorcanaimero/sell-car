import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Models, ModelsDocument } from '@tenancy/models/entities/model.entity';
import { Model } from 'mongoose';
import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';

@Injectable()
export class ModelsService {
  constructor(@InjectModel(Models.name) private model: Model<ModelsDocument>) {}

  // TODO Create USer
  async create(item: CreateModelDto): Promise<Models> {
    const create = new this.model(item);
    return create.save();
  }

  async findAll(): Promise<Models[]> {
    return this.model.find();
  }

  async findOne(id: string): Promise<Models> {
    return this.model.findById(id);
  }

  async update(id: string, item: UpdateModelDto): Promise<Models> {
    return this.model.findByIdAndUpdate(
      { _id: id },
      { $set: item },
      { new: true },
    );
  }

  async remove(id: string): Promise<void> {
    await this.model.remove({ _id: id });
  }
}
