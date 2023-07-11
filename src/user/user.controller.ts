import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags("User")

export class UserController {
  constructor(private readonly userService: UserService) {}





  @Post("/signUp")
  create(@Body(ValidationPipe) createUserDto : CreateUserDto)
  {
    return this.userService.createUser(createUserDto)
  }


  // @Post(':email')
  // getUserByEmail(@Param('email') email:  string)
  // {
  //         return this.userService.getUserByEmail(email);
  // }


}
