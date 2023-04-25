import { Column, Table } from 'sequelize-typescript';

@Table({
  tableName: 'tweets',
})
export class CreateTweetDto {
  @Column
  text: string;
}

/*export class CreateTweetDto {
  obj: Obj;
}*/

//data tranfer object
//class-validator e class-transformer
