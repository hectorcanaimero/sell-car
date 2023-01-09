import { Controller, Post, UseGuards, Body, Get, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from '@core/auth/local.strategy';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalStrategy)
  @Post('login')
  async login(@Body() item: { email: string; password: string }) {
    return this.authService.login(item);
  }

  @Post('forgot-password')
  async forgotPassword(@Body() item: { email: string }) {
    return this.authService.forgotPassword(item.email);
  }

  @Get('profile/:id')
  async getProfile(@Param('id') id: string) {
    return this.authService.getProfile(id);
  }
}
