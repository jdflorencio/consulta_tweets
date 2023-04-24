import { Table, Column } from 'sequelize-typescript';

@Table({
  tableName: 'tweets',
})
export class Tweet {
  @Column
  id: number;
  name: string;
}
