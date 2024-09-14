import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('livros')
export class Livro {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nomeLivro: string;

    @Column()
    autor:string;

    @Column()
    dataLancamento: Date;

    @Column()
    numeroEdicao: number;

    @Column()
    localLancamento: string;

    @Column()
    codigoBarras: string;
}
