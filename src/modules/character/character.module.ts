import { Module } from '@nestjs/common';
import { CharacterController } from './character.controller.js';
import { CharacterService } from './character.service.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [CharacterController],
  providers: [CharacterService]
})
export class CharacterModule {}
