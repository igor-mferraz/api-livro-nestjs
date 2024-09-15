import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, NotFoundException, Query } from '@nestjs/common';
import { LivrosService } from './livros.service';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { Livro } from './entities/livro.entity';

@Controller('livros')
export class LivrosController {
  constructor(private readonly livrosService: LivrosService) {}

  @Post()
  create(@Body() createLivroDto: CreateLivroDto) {
    return this.livrosService.create(createLivroDto);
  }

  @Get()
  async findAll(
    @Query('page') page = '1',
    @Query('limit') limit = '10',
    @Query('search') search = ''
  ){

    const result = await this.livrosService.findAll(+page, +limit, search);

    return {
      data: result.items,
      total: result.total
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const livro = await this.livrosService.findOne(+id);
    if(!livro) throw new NotFoundException()
    return livro;
  }

  @Get('search')
  async findOneSearch(@Query('search') search:string) {
    console.log('pesquisa'+search)
    // const livro = await this.livrosService.findOneSearch(search);
    // if(!livro) throw new NotFoundException()
    // return livro;
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
