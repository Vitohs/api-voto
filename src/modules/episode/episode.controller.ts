import { Body, Controller, Get, Post } from '@nestjs/common';
import { EpisodeService } from './episode.service.js';
import { createEpisodeDTO } from './dtos/create.episode.dto.js';


@Controller('episode')
export class EpisodeController {
    constructor(private service: EpisodeService) {}

    @Post()
    create(@Body() data: createEpisodeDTO) {
        return this.service.criar_servico(data)
    }

    @Get()
    get_all() {
        return this.service.listar_eps()
    }
}
