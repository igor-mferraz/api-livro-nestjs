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

    @Column({nullable:true})
    numeroEdicao: number;

    @Column()
    localLancamento: string;

    @Column()
    codigoBarras: string;
}
