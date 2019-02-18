import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginDTO, RegisterDTO } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // TODO this route is for development only, remove later
  @Get()
  async findAll() {
    return await this.authService.findAll();
  }

  @Post('login')
  async login(@Body() userDTO: LoginDTO) {
    return await this.authService.findByLogin(userDTO);
  }

  @Post('register')
  async register(@Body() userDTO: RegisterDTO) {
    return await this.authService.create(userDTO);
  }
}
