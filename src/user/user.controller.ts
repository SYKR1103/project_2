import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(CreateUserDto:CreateUserDto) {}

  @Get(":id")
  async findUserById(id:string) {}

  @Get(":id")
  async findUserByEmail(id:string) {}


}
