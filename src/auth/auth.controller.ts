import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from 'src/user/user.service';
import {  } from './dto/create-auth.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginUserDto } from 'src/user/dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
              private readonly userService: UserService) {}

@Post("/signup")
async createUser(@Body() createUserDto:CreateUserDto) {
  return await this.authService.createUser(createUserDto)
}


@Post("/login")
async loginUser(@Body() LoginUserDto:LoginUserDto) {
  return await this.authService.loginUser(LoginUserDto)
}             


}
