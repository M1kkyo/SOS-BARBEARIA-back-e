import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('usuarios')
@ApiTags('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post('criar')
  @ApiOperation({summary: 'criar um usuario'})
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Get('listar todos')
  @ApiOperation({summary: 'listar todos os usuarios'})
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'buscar um usuario pelo id'})
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(+id);
  }

  @Patch('atualizar/:id')
  @ApiOperation({summary: 'atualizar um usuario pelo id'})
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(+id, updateUsuarioDto);
  }

  @Delete('deletar/:id')
  @ApiOperation({summary: 'deletar um usuario pelo id'})
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(+id);
  }
}
