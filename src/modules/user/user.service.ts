import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { CreateUserDto } from './userDto/create-user.dto';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(createUserDto: CreateUserDto) {
    const createUser = await this.userModel.create(createUserDto);

    return createUser;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().populate('books').exec();
  }
}
