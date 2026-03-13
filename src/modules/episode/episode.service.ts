import { Injectable, NotImplementedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { createEpisodeDTO } from './dtos/create.episode.dto.js';

@Injectable()
export class EpisodeService {
    constructor(private readonly prisma: PrismaService) {}

    criar_servico(data: createEpisodeDTO) {
        return NotImplementedException
    }
}
