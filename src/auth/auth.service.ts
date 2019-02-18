import { Injectable } from '@nestjs/common';
import { UserService } from 'src/shared/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(token: string) {
    return await {};
  }
}
