import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards ,Request, Req} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './login.dto';

@Controller('auth')
@ApiTags("Login")
export class AuthController {

  constructor(private readonly jwtService : JwtService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login/')
  login(@Req() req,@Body() loginDto : LoginDto){
    // jwt token


      const user : User = req.user
      const payload = {
        userId : user.id,
        username : user.username,
        email : user.email,
        role : user.role
      }
  

    return  {token : this.jwtService.sign(payload)};
 
 }

}
