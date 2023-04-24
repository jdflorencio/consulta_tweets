import { Column, Table } from 'sequelize-typescript';

@Table({
  tableName: 'tweets',
})

export class Obj {
  @Column
  fist_name: string;
  last_name: string;
}

export class CreateTweetDto {
  obj: Obj;
}

//data tranfer object
//class-validator e class-transformer
