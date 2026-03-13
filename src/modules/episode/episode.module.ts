import { Module } from '@nestjs/common';
import { EpisodeController } from './episode.controller.js';
import { EpisodeService } from './episode.service.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [EpisodeController],
  providers: [EpisodeService]
})
export class EpisodeModule {}
