import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateLivroDto {

    @IsString()
    @IsNotEmpty({ message: 'O nome do livro não pode estar vazio.' })
    nomeLivro: string;

    @IsString()
    @IsNotEmpty({ message: 'Autor não pode estar vazio.' })
    autor:string;

    @IsDateString()
    @IsNotEmpty({ message: 'Data Lançamento não pode estar vazio.' })
    dataLancamento: Date;

    @IsNumber()
    @IsNotEmpty({ message: 'O Numero Edição não pode estar vazio.' })
    numeroEdicao: number;

    @IsString()
    @IsNotEmpty({ message: 'O Local de Lançamento não pode estar vazio.' })
    localLancamento: string;

    @IsString()
    @IsNotEmpty({ message: 'O Codigo de Barras não pode estar vazio.' })
    codigoBarras: string;

}
