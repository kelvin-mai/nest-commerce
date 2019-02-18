import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from 'src/shared/user.service';
import { LoginDTO, RegisterDTO } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}

  // TODO this route is for development only, remove later
  @Get()
  @UseGuards(AuthGuard('bearer'))
  async findAll() {
    return await this.userService.findAll();
  }

  @Post('login')
  async login(@Body() userDTO: LoginDTO) {
    return await this.userService.findByLogin(userDTO);
  }

  @Post('register')
  async register(@Body() userDTO: RegisterDTO) {
    return await this.userService.create(userDTO);
  }
}
