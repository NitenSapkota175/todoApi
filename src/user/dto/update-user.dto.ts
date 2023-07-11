import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsAlphanumeric, IsEmail, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {


    @IsString()
    username : string;
    
    @IsEmail()
    email : string;

    @IsAlphanumeric()
    password : string;
    

}
