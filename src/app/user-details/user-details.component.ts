import { Component } from '@angular/core';
import { AnnuaireService } from '../annuaire.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private annuaireService: AnnuaireService
  ){}

  ngOnInit(){
    const userId : string | null = this.route.snapshot.paramMap.get('id');

    if (userId){
      this.annuaireService.getUserById(+userId).subscribe(user => this.user = user)
      this.annuaireService.getPhonesByUserId(+userId).subscribe(phones => this.phones = phones)
      this.annuaireService.getEmailsByUserId(+userId).subscribe(emails => this.emails = emails)
    }
  
  }
}
