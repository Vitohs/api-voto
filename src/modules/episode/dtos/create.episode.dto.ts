import { IsString, MinLength } from 'class-validator'
export class createEpisodeDTO {
    @IsString({ message: 'string por favorrr' })
    @MinLength(5)
    public title!: string
}