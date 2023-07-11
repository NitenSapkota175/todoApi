import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsEmail, IsString } from "class-validator";

export class CreateUserDto {

    
            @ApiProperty()
            @IsString()
            username : string;
            
            @ApiProperty()
            @IsEmail()
            email : string;

            @ApiProperty()
            @IsAlphanumeric()
            password : string;
            


}
