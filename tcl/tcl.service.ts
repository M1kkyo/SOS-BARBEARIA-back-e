import { Injectable } from '@nestjs/common';
import { CreateTclDto } from './dto/create-tcl.dto';
import { UpdateTclDto } from './dto/update-tcl.dto';

@Injectable()
export class TclService {
  create(createTclDto: CreateTclDto) {
    return 'This action adds a new tcl';
  }

  findAll() {
    return `This action returns all tcl`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tcl`;
  }

  update(id: number, updateTclDto: UpdateTclDto) {
    return `This action updates a #${id} tcl`;
  }

  remove(id: number) {
    return `This action removes a #${id} tcl`;
  }
}
