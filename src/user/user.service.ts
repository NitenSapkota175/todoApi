import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { CreateUserParams } from './utils/types';

@Injectable()
export class UserService {

  @InjectRepository(User) private userRepository : Repository<User> 


  createUser(createUserDto : CreateUserDto){
    const newUser = this.userRepository.create({...createUserDto, createdAt : new Date(),role : "this is role"});
    return this.userRepository.save(newUser);
} 


findUserById(id : number){
  return this.userRepository.findOneBy({id})
}

async getUserByEmail(email : string) :Promise< User  | undefined> {

  const user = await this.userRepository.findOne({where : {email : email}})

 return user;
}  











  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  // findAll() {
  //   return `This action returns all user`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
