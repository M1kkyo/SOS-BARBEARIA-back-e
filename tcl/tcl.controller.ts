import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TclService } from './tcl.service';
import { CreateTclDto } from './dto/create-tcl.dto';
import { UpdateTclDto } from './dto/update-tcl.dto';

@Controller('tcl')
export class TclController {
  constructor(private readonly tclService: TclService) {}

  @Post()
  create(@Body() createTclDto: CreateTclDto) {
    return this.tclService.create(createTclDto);
  }

  @Get()
  findAll() {
    return this.tclService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tclService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTclDto: UpdateTclDto) {
    return this.tclService.update(+id, updateTclDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tclService.remove(+id);
  }
}
