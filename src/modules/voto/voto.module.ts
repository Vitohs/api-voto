import { Module } from '@nestjs/common';
import { VotoController } from './voto.controller.js';
import { VotoService } from './voto.service.js';
import { PrismaModule } from '../prisma/prisma.module.js';
import { BullModule } from '@nestjs/bull';
import { VotoProcessor } from './queue/voto.processor.js';

@Module({
  imports: [
    BullModule.registerQueue({ name: "votos" }),
    PrismaModule
  ],
  controllers: [VotoController],
  providers: [VotoService, VotoProcessor]
})
export class VotoModule {}
