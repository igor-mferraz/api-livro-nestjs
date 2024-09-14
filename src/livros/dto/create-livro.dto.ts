import { IsDateString, IsNumber, IsString } from "class-validator";

export class CreateLivroDto {

    @IsString()
    nomeLivro: string;

    @IsString()
    autor:string;

    @IsDateString()
    dataLancamento: Date;

    @IsNumber()
    numeroEdicao: number;

    @IsString()
    localLancamento: string;

    @IsString()
    codigoBarras: string;

}
