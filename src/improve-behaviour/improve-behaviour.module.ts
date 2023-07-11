import { Module } from '@nestjs/common';
import { ImproveBehaviourService } from './improve-behaviour.service';
import { ImproveBehaviourController } from './improve-behaviour.controller';
import { TypeORMError} from 'typeorm';
import { ImproveBehaviour } from './entities/improve-behaviour.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { BehaviourModule } from 'src/behaviour/behaviour.module';

@Module({

  imports : [TypeOrmModule.forFeature([ImproveBehaviour]),UserModule,BehaviourModule] ,
  controllers: [ImproveBehaviourController],
  providers: [ImproveBehaviourService]
})
export class ImproveBehaviourModule {}
