import { PartialType } from '@nestjs/mapped-types';
import { CreateBehaviourDto } from './create-behaviour.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBehaviourDto extends PartialType(CreateBehaviourDto) {
    @ApiProperty()
    title : string;
}
