import { IsInt } from 'class-validator'

export class createVotoDTO {
    @IsInt()
    public episodeId!: number
    @IsInt()
    public characterId!: number
}