import { Component } from '@angular/core';
import { AnnuaireService } from '../../services/annuaire.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import { PhoneService } from '../../services/phone.service';

export interface Tile{
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})

export class UserDetailsComponent {
  user: any;
  phones : any;
  emails : any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private phoneService: PhoneService
  ){}

  ngOnInit(){
    const userId : string | null = this.route.snapshot.paramMap.get('id');

    if (userId){
      this.userService.getUserById(+userId).subscribe(user => this.user = user)
      this.phoneService.getPhonesByUserId(+userId).subscribe(phones => this.phones = phones)
      this.phoneService.getEmailsByUserId(+userId).subscribe(emails => this.emails = emails)
    }
  
  }
}
