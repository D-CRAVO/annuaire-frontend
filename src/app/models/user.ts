export class User{
    id: number;
    firstname: string;
    lastname: string;
    address: string;
    zipCode: string;
    city: string;

    constructor(
        id: number,
        firstname: string = 'Pierre', 
        lastname: string = 'Leroy', 
        address: string = '789 boulevard des étoiles', 
        zipCode: string = '13003', 
        city: string = 'Marseille'
        ){
            this.id = id
            this.firstname = firstname
            this.lastname = lastname
            this.address = address
            this.zipCode = zipCode
            this.city = city
    }
    
}