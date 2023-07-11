import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BehaviourModule } from './behaviour/behaviour.module';
import { AuthModule } from './auth/auth.module';
import { ImproveBehaviourModule } from './improve-behaviour/improve-behaviour.module';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    imports: [ConfigModule.forRoot({
      isGlobal : true,
      envFilePath : ".local.env"
      // envFilePath : ".prod.env",
    })],

    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.get('DB_HOST'),
      port: configService.get<number>('DB_PORT'),
      username: configService.get('DB_USERNAME'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_DATABASE'),
      entities : [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: configService.get<boolean>('DB_SYNC'),
      logging : true
    }),
    
  }),UserModule, BehaviourModule,AuthModule, ImproveBehaviourModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
