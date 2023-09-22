import { PartialType } from '@nestjs/mapped-types';
import { CreateTclDto } from './create-tcl.dto';

export class UpdateTclDto extends PartialType(CreateTclDto) {}
