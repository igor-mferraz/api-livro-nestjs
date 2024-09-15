import { Injectable } from '@nestjs/common';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { ILike, Like, Repository } from 'typeorm';
import { Livro } from './entities/livro.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LivrosService {
  constructor(
    @InjectRepository(Livro)
    private readonly repository: Repository<Livro>
  ){}



  create(dto: CreateLivroDto) {
    const livro = this.repository.create(dto);
    return this.repository.save(livro);
  }

  async findAll(page: number, limit:number, search:string) {
    const [items, total] = await this.repository.findAndCount({
      where: [
        {
          nomeLivro: search ? ILike(`%${search}%`) : undefined
        },
        {
          autor: search ? ILike(`%${search}%`) : undefined
        }
      ],
      skip: (page - 1) * limit,
      take: limit
    })
    return {items, total}
  }


  findOne(id: number) {
    return this.repository.findOneBy({id});
  }

  async update(id: number, dto: UpdateLivroDto) {
    const livro = await this.repository.findOneBy({id});
    if(!livro) return null;
    this.repository.merge(livro,dto);
    return this.repository.save(livro)
  }

  async remove(id: number) {
    const livro = await this.repository.findOneBy({id});
    if(!livro) return null;
    await this.repository.delete({id})
  }
}
