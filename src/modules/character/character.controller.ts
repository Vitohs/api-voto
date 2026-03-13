import { Body, Controller, Get, Post } from '@nestjs/common';
import { CharacterService } from './character.service.js';
import { createCharacterDTO } from './dtos/create.character.dto.js';

@Controller('character')
export class CharacterController {
    constructor(private readonly service: CharacterService){}

    @Post()
    create(@Body() data: createCharacterDTO) {
        return this.service.create_character(data)
    }

    @Get()
    ping(){
        return this.service.ping()
    }
}
