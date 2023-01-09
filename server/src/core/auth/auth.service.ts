import { Injectable, NotAcceptableException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '@master/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (!user) return null;
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!user) {
      throw new NotAcceptableException('could not find the user');
    }
    if (user && passwordValid) {
      return user;
    }
    return null;
  }
  async login(item: { email: string; password: string }) {
    const user: any = await this.usersService.findByEmail(item.email);
    if (user) {
      const payload = { email: user.email, sub: user._id };
      return {
        user,
        access_token: this.jwtService.sign(payload),
      };
    }
  }
}
