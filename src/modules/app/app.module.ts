import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CharacterModule } from '../character/character.module.js';
import { EpisodeModule } from '../episode/episode.module.js';

@Module({
  imports: [CharacterModule, EpisodeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
