import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { createEpisodeDTO } from './dtos/create.episode.dto.js';
import { good_response } from '../../common/helpers/response.helper.js';

@Injectable()
export class EpisodeService {
    constructor(private readonly prisma: PrismaService) {}

    async criar_servico(data: createEpisodeDTO) {
        const ep = await this.prisma.episode.create({
            data: data,
            select: {
                title: true,
                isVotingOpen: true
            }
        })
        return good_response('episódio criado com sucesso', ep)
    }

    async listar_eps() {
        const eps = await this.prisma.episode.findMany({
            select: {
                title: true,
                isVotingOpen: true
            }
        })
        if(eps.length === 0) throw new NotFoundException('nenhum episódio encontrado.')
        return good_response('episódios disponíveis no momento:', eps)
    }
}
