import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CharacterModule } from '../character/character.module.js';
import { EpisodeModule } from '../episode/episode.module.js';
import { VotoModule } from '../voto/voto.module.js';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    BullModule.forRoot({
      redis: process.env.REDIS_URL ?? "redis://localhost:6379",
      defaultJobOptions: {
        removeOnComplete: 22,
        removeOnFail: true,
        attempts: 3,
        backoff: { type: 'exponential', delay: 1000 }
      }
    }),
    CharacterModule, 
    EpisodeModule, 
    VotoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
