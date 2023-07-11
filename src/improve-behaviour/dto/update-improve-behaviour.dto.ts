import { PartialType } from '@nestjs/mapped-types';
import { CreateImproveBehaviourDto } from './create-improve-behaviour.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateImproveBehaviourDto extends PartialType(CreateImproveBehaviourDto) {
    @ApiProperty()
    title : string
}
