import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginDTO, RegisterDTO } from 'src/auth/auth.dto';
import { User } from 'src/types/user';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(userDTO: RegisterDTO) {
    const createdUser = new this.userModel(userDTO);
    return await createdUser.save();
  }

  async findByLogin(userDTO: LoginDTO) {
    const { username } = userDTO;
    return await this.userModel.findOne({ username });
  }

  // TODO this method is for development only, remove later
  async findAll() {
    return await this.userModel.find().exec();
  }
}
