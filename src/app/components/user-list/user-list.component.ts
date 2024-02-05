import { Component, OnInit } from '@angular/core';
import { AnnuaireService } from '../../services/annuaire.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  users : any;
  user : any;
  emails: any;
  phones: any;
  phone: any;

  constructor(
    private annuaireService: AnnuaireService
  ){}

  ngOnInit(){
    this.annuaireService.getUsers().subscribe(users => this.users = users)
  }

  getProfessionalPhoneByUserId(userId: number){
    console.log("test")
    this.annuaireService.getPhonesByUserId(userId).subscribe(phones => this.phones = phones)
    this.phone = this.phones[0].number
    console.log(this.phone)
    return this.phone
  }
}
