import { Controller, Get, Post, Body, Patch, Param, Delete ,Request, ParseIntPipe, Req} from '@nestjs/common';
import { BehaviourService } from './behaviour.service';
import { CreateBehaviourDto } from './dto/create-behaviour.dto';
import { UpdateBehaviourDto } from './dto/update-behaviour.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';

@Controller('behaviour')
@ApiTags("Behaviour")
@ApiSecurity("JWT-auth")
export class BehaviourController {
  constructor(private readonly behaviourService: BehaviourService) {}

  @Post()
  createBehaviour(@Request()  req ,@Body() createBehaviourDto : CreateBehaviourDto){
      const userId = req.userId;
      return this.behaviourService.AddBehaviour(userId , createBehaviourDto);
  }

  @Post(':id/update/')
    UpdateBehaviorById(@Param('id',ParseIntPipe) id ,@Body() updateBehaviourDto : UpdateBehaviourDto){
      
      return  this.behaviourService.UpdateBehavior( id , updateBehaviourDto);
  }

  @Delete(':id/delete')
  DeleteBehaviorById(@Param('id',ParseIntPipe) id )
  {
          return this.behaviourService.DeleteBehavior(id) 
  }

  @Get()
  async getAllUserBehaviours(@Req() req )
  {   
        const id = req.userId;
        return this.behaviourService.getAllBehaviourOfUser(id)
  }

  

    
















  // @Post()
  // create(@Body() createBehaviourDto: CreateBehaviourDto) {
  //   return this.behaviourService.create(createBehaviourDto);
  // }

  // @Get()
  // findAll() {
  //   return this.behaviourService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.behaviourService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBehaviourDto: UpdateBehaviourDto) {
  //   return this.behaviourService.update(+id, updateBehaviourDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.behaviourService.remove(+id);
  // }
}
