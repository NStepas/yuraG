import { UserService } from './user.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './userDto/create-user.dto';
import { User } from './schema/user.schema';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
