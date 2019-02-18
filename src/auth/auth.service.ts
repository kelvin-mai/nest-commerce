import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/types/user';
import { LoginDTO, RegisterDTO } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(userDTO: RegisterDTO) {
    const createdUser = new this.userModel(userDTO);
    return await createdUser.save();
  }

  async findByLogin(userDTO: LoginDTO) {
    const { username, password } = userDTO;
    return await this.userModel.findOne({ username, password });
  }

  // TODO this method is for development only, remove later
  async findAll() {
    return await this.userModel.find().exec();
  }
}
