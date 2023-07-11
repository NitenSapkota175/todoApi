import { Controller, Get, Post, Body, Patch, Param, Delete ,Request, ParseIntPipe} from '@nestjs/common';
import { ImproveBehaviourService } from './improve-behaviour.service';
import { CreateImproveBehaviourDto } from './dto/create-improve-behaviour.dto';
import { UpdateImproveBehaviourDto } from './dto/update-improve-behaviour.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';

@Controller('improve-behaviour')
@ApiTags("improve-behaviour")
@ApiSecurity("JWT-auth")
export class ImproveBehaviourController {
  constructor(private readonly improveBehaviourService: ImproveBehaviourService) {}

  @Post(':id')
  createImproveBehaviour(@Param('id',ParseIntPipe) id ,@Body() createImproveBehaviourDto :  CreateImproveBehaviourDto){
      
      return this.improveBehaviourService.AddImproveBehaviour(id ,createImproveBehaviourDto);
  }

  @Post(':id/update/')
    UpdateImproveBehavior(@Param('id',ParseIntPipe) id ,@Body() updateImproveBehaviourDto : UpdateImproveBehaviourDto){
      
      return  this.improveBehaviourService.UpdateImproveBehavior( id , updateImproveBehaviourDto);
  }
 
  @Delete(':id/delete')
  DeleteImproveBehavior(@Param('id',ParseIntPipe) id )
  {
          return this.improveBehaviourService.DeleteImproveBehavior(id) 
  }

  @Get(':id')
  findAllImproveBehaviour(@Param(':id') id)
  {
        return this.improveBehaviourService.getAllImproveBehaviourOfBehaviour(id)
  }



}
