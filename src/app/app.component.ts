import { Component, OnInit } from '@angular/core';
import { AnnuaireService } from './annuaire.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AnnuaireService]
})
export class AppComponent implements OnInit{
  title = 'annuaire-frontend';
  users: any;
  phoneList: any;
  
  constructor(private annuaireService: AnnuaireService){
    this.users = [];
  }

  ngOnInit(): void {
      console.log('On Init ...')
      this.annuaireService.getUsers().subscribe(data => {
        this.users = data;
      })
      this.annuaireService.getPhonesByUserId(1).subscribe(data=> {
        this.phoneList = data;
      })
  }
}
