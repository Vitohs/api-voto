import { Injectable, NotImplementedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { createCharacterDTO } from './dtos/create.character.dto.js';
import { good_response } from '../../common/helpers/response.helper.js';

@Injectable()
export class CharacterService {
    constructor(private prisma: PrismaService) {}
    
    public async create_character(data:createCharacterDTO) {
        const character = await this.prisma.character.create({
            data: {
                name: data.name
            },
            select: {
                name: true,
                status: true
            }
        })
        
        return good_response('personagem criado com sucesso', character)
    }

    public ping() {
        return 'são paulo futebol clube'
    }
}
