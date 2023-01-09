import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Brand, BrandDocument } from '@tenancy/brands/entities/brand.entity';
import { Model } from 'mongoose';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Injectable()
export class BrandsService {
  constructor(@InjectModel(Brand.name) private model: Model<BrandDocument>) {}

  // TODO Create USer
  async create(item: CreateBrandDto): Promise<Brand> {
    const create = new this.model(item);
    return create.save();
  }

  async findAll(): Promise<Brand[]> {
    return this.model.find();
  }

  async findOne(id: string): Promise<Brand> {
    return this.model.findById(id);
  }

  async update(id: string, item: UpdateBrandDto): Promise<Brand> {
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
