import { Processor, Process } from '@nestjs/bull';
import type { Job } from 'bull';
import { PrismaService } from '../../prisma/prisma.service.js';
import { createVotoDTO } from '../dto/create.voto.dto.js';

@Processor('votos')
export class VotoProcessor {
  constructor(private readonly prisma: PrismaService) {}

  @Process('criar-ou-atualizar-voto')
  async votar(job: Job<createVotoDTO>) {
    const data = job.data;

    try {
      await this.prisma.voteConsolidated.upsert({
        where: {
          episodeId_characterId: {
            episodeId: data.episodeId,
            characterId: data.characterId,
          },
        },
        update: {
          totalVotes: { increment: 1 },
        },
        create: {
          totalVotes: 1,
          characterId: data.characterId,
          episodeId: data.episodeId,
        },
      });
      
      return { status: 'success', characterId: data.characterId };
    } catch (error) {
      console.error(`Erro ao processar voto do job ${job.id}:`, error);
      throw error; 
    }
  }
}