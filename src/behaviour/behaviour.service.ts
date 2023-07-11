import { Inject, Injectable } from '@nestjs/common';
import { CreateBehaviourDto } from './dto/create-behaviour.dto';
import { UpdateBehaviourDto } from './dto/update-behaviour.dto';
import { Behaviour } from './entities/behaviour.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';

@Injectable()
export class BehaviourService {
  constructor(
    @InjectRepository(Behaviour) private behaviourRepository : Repository<Behaviour> ,
    @Inject(UserService)
    private readonly userService: UserService,

    
    ){}
  

  async AddBehaviour(userId  : number, createBehaviourParams : CreateBehaviourDto)
  {
      const user = await this.userService.findUserById(userId)
      const newPost = this.behaviourRepository.create({...createBehaviourParams , createdAt : new Date() , user })

      return this.behaviourRepository.save(newPost)

  }

   async getAllBehaviourOfUser(id : number)
  {
        const user = this.userService.findUserById(id)

        if(user != null)
        return this.behaviourRepository.find({where : { user : {id : id}}})
        else
          return "user have no made any behaviour";
  }

 

  async UpdateBehavior(id  : number, updateBehaviourParams : UpdateBehaviourDto)
  {
      const user = await this.userService.findUserById(id)
      const updatedPost = this.behaviourRepository.update({id} , {...updateBehaviourParams })

      return  updatedPost;

  }

  DeleteBehavior(id : number){

    return this.behaviourRepository.delete(id)
  }


  getBehaviourById(id : number)
  {
    console.log(id)
    return this.behaviourRepository.findOneBy({id})
  }





}
