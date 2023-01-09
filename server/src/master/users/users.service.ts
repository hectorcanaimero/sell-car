import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private model: Model<UserDocument>) {}
  // TODO Create USer
  async create(item: CreateUserDto) {
    const user = await this.findByEmail(item.email); // TODO Validate if user exist
    if (!user) {
      const salt = +process.env.AUTH_BCRYPT;
      const hashedPassword: string = await bcrypt.hash(item.password, salt);
      item.password = hashedPassword;
      const create = new this.model(item);
      return create.save();
    }
    return { message: 'User exist!' };
  }

  async findById(id: string): Promise<User> {
    return this.model.findById(id).select('-password');
  }

  async findByEmail(email: string): Promise<User> {
    return this.model.findOne({ email });
  }

  async findByWorkspace(workspace: string): Promise<User> {
    return this.model.findOne({ workspace });
  }

  update(id: string, item: UpdateUserDto) {
    return this.model
      .findByIdAndUpdate({ _id: id }, { $set: item }, { new: true })
      .select('-password');
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
