import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  TypeVehicle,
  TypeVehicleDocument,
} from '@tenancy/type-vehicles/entities/type-vehicle.entity';
import { CreateTypeVehicleDto } from './dto/create-type-vehicle.dto';
import { UpdateTypeVehicleDto } from './dto/update-type-vehicle.dto';

@Injectable()
export class TypeVehiclesService {
  constructor(
    @InjectModel(TypeVehicle.name) private model: Model<TypeVehicleDocument>,
  ) {}

  // TODO Create USer
  async create(item: CreateTypeVehicleDto): Promise<TypeVehicle> {
    const create = new this.model(item);
    return create.save();
  }

  async findAll(): Promise<TypeVehicle[]> {
    return this.model.find({});
  }

  async findOne(id: string): Promise<TypeVehicle> {
    return this.model.findById(id);
  }

  async update(id: string, item: UpdateTypeVehicleDto): Promise<TypeVehicle> {
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
