import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from 'process';
@Module({
  imports : [PassportModule,UserModule,JwtModule.registerAsync(
  {
    imports : [ConfigModule,UserModule],
    inject : [ConfigService],
    useFactory : (configService : ConfigService) => ({
      secret : configService.get('JWT_KEY'),
      signOptions:{ 
        expiresIn : configService.get<string>("JWT_EXPIRE") + "s" // 60s ,

      }

  }) 
   

  })],
  controllers: [AuthController],
  providers: [AuthService , LocalStrategy , JwtStrategy],
  exports : [AuthService]
})
export class AuthModule {}
