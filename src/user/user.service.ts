import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { HttpException, HttpStatus} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {


  @InjectRepository(User)
  private userRepo : Repository<User>


  async createUser(createUserDto:CreateUserDto) {}

  async findUserById(id:string) {}

  async findUserByEmail(email:string) {
    const user = await this.userRepo.findOneBy({email})
    if (user) return user
    throw new HttpException("not found", HttpStatus.NOT_FOUND)
  }


}
