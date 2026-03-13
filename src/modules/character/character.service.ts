import { Injectable, NotImplementedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { createCharacterDTO } from './dtos/create.character.dto.js';

@Injectable()
export class CharacterService {
    constructor(private prisma: PrismaService) {}
    
    public async create_character(data:createCharacterDTO) {
        const character = await this.prisma.character.create({
            data: {
                name: data.name
            }
        })
        
        return {
            message: 'personagem criado com sucesso!',
            data: character
        }
    }

    public ping() {
        return 'vivi é fodakk'
    }
}
