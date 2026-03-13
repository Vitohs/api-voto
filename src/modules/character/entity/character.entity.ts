import { Status } from "../../../../generated/prisma/enums.js"

export class characterEntity {
    public id!: number
    public name!: string
    public status!: Status
}