import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginUserDto } from 'src/user/dto/login-user.dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { TokenPayloadInterface } from './tokenPayload.interface';

@Injectable()
export class AuthService {

  constructor(
    private readonly userService : UserService,  
    private readonly configService : ConfigService,  
    private readonly jwtService : JwtService,  
  ) {}

  
  async createUser(createUserDto:CreateUserDto) {
    try{
      return await this.userService.createUser(createUserDto)
    } catch(e) 
    {console.log(e)
     throw new HttpException("something wrong", HttpStatus.INTERNAL_SERVER_ERROR)}
  }

  async loginUser(LoginUserDto:LoginUserDto) {
    try{
      const user = await this.userService.findUserByEmail(LoginUserDto.email)
      const isMatchedMatched = await user.checkPassword(LoginUserDto.password)
      if(!isMatchedMatched) {throw new HttpException('pw not matched', HttpStatus.BAD_REQUEST)}
    }
    catch(e) {
      console.log(e)
      throw new HttpException("not found", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }


  public generateJwtAccessToken(userId : string) {
    const payload : TokenPayloadInterface = {userId}
    const token = this.jwtService.sign(payload, {
      secret : this.configService.get('JWT_ACCESS_TOKEN_SECRET'),
      expiresIn : this.configService.get('JWT_ACCESS_TOKEN_EXPIRATION_TIME')
    })
  
    return token
  
  }




}
