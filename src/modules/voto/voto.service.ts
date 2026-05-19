import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { createVotoDTO } from './dto/create.voto.dto.js';
import { good_response } from '../../common/helpers/response.helper.js';
import { InjectQueue, Process } from '@nestjs/bull';
import type { Job, Queue } from 'bull';

@Injectable()
export class VotoService {
    constructor(
        private prisma: PrismaService, 
        @InjectQueue("votos") 
        private readonly queue: Queue
    ) {}
    
    async handle_votar(data: createVotoDTO) {
        await this.queue.add("criar-ou-atualizar-voto", data)
        return { message: "voto computado com sucesso :>" }
    }
}
