import { IsNotEmpty, IsNumber, IsString, Matches } from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('prodotti')
export class ProdottoEntity {
  @IsNumber()
  @PrimaryColumn()
  @IsNotEmpty({
    message: 'il campo è obblicatorio',
  })
  productid: number;

  @IsString()
  @Column()
  @Matches(/^[a-z ]{3,}$/g, {
    message: 'Il nome prodotto deve essere almeno di 3 caratteri',
  })
  productname: string;

  @IsNumber()
  @IsNotEmpty()
  @Column()
  unitprice: number;
}
