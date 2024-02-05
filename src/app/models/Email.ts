import { User } from "./User"

export class Email{
    id: number
    address: string
    type: string
    user: User

    constructor(id: number, address: string, type: string, user: User){
        this.id = id
        this.address = address
        this.type = type
        this.user = user
    }
}