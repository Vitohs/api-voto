import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CharacterModule } from '../character/character.module.js';

@Module({
  imports: [CharacterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
