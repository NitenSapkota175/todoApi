import { Inject, Injectable } from '@nestjs/common';
import { CreateImproveBehaviourDto } from './dto/create-improve-behaviour.dto';
import { UpdateImproveBehaviourDto } from './dto/update-improve-behaviour.dto';
import { ImproveBehaviour } from './entities/improve-behaviour.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindRelationsNotFoundError, Repository } from 'typeorm';
import { BehaviourService } from 'src/behaviour/behaviour.service';


@Injectable()
export class ImproveBehaviourService {
  
 constructor( @InjectRepository(ImproveBehaviour) private improveBehaviourRepository : Repository<ImproveBehaviour> ,
  @Inject(BehaviourService)
  private readonly behaviourService: BehaviourService,

  
  ){}
  

  async AddImproveBehaviour(id  : number, createImproveBehaviourDto : CreateImproveBehaviourDto)
  {
      const behaviour = await this.behaviourService.getBehaviourById(id)
      const newImproveBehaviour = this.improveBehaviourRepository.create({...createImproveBehaviourDto , createdAt : new Date(),behaviour})

 

      return this.improveBehaviourRepository.save(newImproveBehaviour)

  }

   getAllImproveBehaviourOfBehaviour(id : number)
  {
      const {...behaviour} = this.behaviourService.getBehaviourById(id)
      console.log(behaviour)  
      if(behaviour == null)
          return `behaviour with id : ${id} is not present`
      
      return  this.improveBehaviourRepository.find({ where: { behaviour : {id: id } }})

  }

  async UpdateImproveBehavior(id  : number, updateImproveBehaviourDto : UpdateImproveBehaviourDto)
  {
     
      const updatedPost = this.improveBehaviourRepository.update({id} , {...updateImproveBehaviourDto })

      return  updatedPost;

  }

  DeleteImproveBehavior(id : number){

    return this.improveBehaviourRepository.delete(id)
  }

 

}
