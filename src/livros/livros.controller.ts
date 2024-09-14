import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, NotFoundException } from '@nestjs/common';
import { LivrosService } from './livros.service';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';

@Controller('livros')
export class LivrosController {
  constructor(private readonly livrosService: LivrosService) {}

  @Post()
  create(@Body() createLivroDto: CreateLivroDto) {
    return this.livrosService.create(createLivroDto);
  }

  @Get()
  findAll() {
    return this.livrosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const livro = await this.livrosService.findOne(+id);
    if(!livro) throw new NotFoundException()
    return livro;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateLivroDto: UpdateLivroDto) {
    const livro = await this.livrosService.update(+id, updateLivroDto);
    if(!livro) throw new NotFoundException()
    return livro;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const livro = await this.livrosService.findOne(+id);
    if(!livro) throw new NotFoundException();
    await this.livrosService.remove(+id);
  }
}
