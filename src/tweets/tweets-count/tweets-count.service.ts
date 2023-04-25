import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Tweet } from '../entities/tweet.entity';
import { Cron, Interval } from '@nestjs/schedule';

@Injectable()
export class TweetsCountService {
  constructor(
    @InjectModel(Tweet)
    private tweetModel: typeof Tweet,
  ) {}

  @Interval(5000) //cronjob uma tarefa executando por baixo dos panos
  async countTeets() {
    console.log('teste da tarefa em execucao');
    this.tweetModel.findAll({
      offset: 10,
      limit: 10,
    });
  }
}
