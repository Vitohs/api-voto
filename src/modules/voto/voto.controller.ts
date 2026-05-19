import { Body, Controller, Post } from '@nestjs/common';
import { VotoService } from './voto.service.js';
import { createVotoDTO } from './dto/create.voto.dto.js';

@Controller('voto')
export class VotoController {
    constructor(private readonly service: VotoService) {}
    @Post() 
    votar(@Body() data: createVotoDTO) {
        return this.service.handle_votar(data)
    }
}
