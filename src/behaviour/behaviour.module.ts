import { Module } from '@nestjs/common';
import { BehaviourService } from './behaviour.service';
import { BehaviourController } from './behaviour.controller';
import { UserModule } from 'src/user/user.module';
import { Behaviour } from './entities/behaviour.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [TypeOrmModule.forFeature([Behaviour]) ,Behaviour , UserModule],
  controllers: [BehaviourController],
  providers: [BehaviourService],
  exports : [BehaviourService]
})
export class BehaviourModule {}
