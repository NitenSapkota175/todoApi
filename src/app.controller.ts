import { Controller, Get, Post, UseGuards,Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService ,
    private readonly authService : AuthService
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  
}
