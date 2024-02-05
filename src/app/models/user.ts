export class User{
    id: number;
    firstname: string;
    lastname: string;
    address: string;
    zipCode: string;
    city: string;

    constructor(id: number, firstname: string, lastname: string, address: string, zipCode: string, city: string){
        this.id = id
        this.firstname = firstname
        this.lastname = lastname
        this.address = address
        this.zipCode = zipCode
        this.city = city
    }
}