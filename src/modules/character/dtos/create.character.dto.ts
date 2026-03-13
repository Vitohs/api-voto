import { IsString, MinLength } from 'class-validator'

export class createCharacterDTO {
    @IsString( { message: 'string por favor' } )
    @MinLength(3) // léo
    public name!: string
}