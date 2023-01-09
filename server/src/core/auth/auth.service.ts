import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

import { UsersService } from '@master/users/users.service';
import { CreateUserDto } from '@master/users/dto/create-user.dto';
import { User } from '@master/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      return { message: 'User is not exist!', status: false };
    }
    const passwordValid = await bcrypt.compare(password, user.password);
    if (user && passwordValid) {
      user.password = null;
      return user;
    }
    return { message: 'wrong password', status: false };
  }
  async login(item: { email: string; password: string }) {
    const user = await this.validateUser(item.email, item.password);
    if (user.status) {
      const payload = { email: user.email, sub: user._id };
      return {
        user,
        access_token: this.jwtService.sign(payload),
      };
    }
    return { message: user.message };
  }

  async forgotPassword(email: string): Promise<any> {
    const user: CreateUserDto = await this.usersService.findByEmail(email);
    if (user) {
      return {
        message: `${user.firstName} ${user.lastName}, you received an e-mail ${user.email} with the instructions to reset your password`,
      };
    }
    return { message: 'User is not exist!' };
  }

  async getProfile(id: string): Promise<User | { message: string }> {
    const user = await this.usersService.findById(id);
    if (user) {
      return user;
    }
    return { message: 'User is not exist!' };
  }
}
