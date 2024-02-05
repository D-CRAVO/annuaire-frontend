import { User } from "./User"

export class Phone{
    id: number
    number: string
    type: string
    user: User

    constructor(id: number, number: string, type: string, user: User){
        this.id = id
        this.number = number
        this.type = type
        this.user = user
    }
}