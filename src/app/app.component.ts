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
  
  constructor(private annuaireService: AnnuaireService){
    this.users = [];
  }

  ngOnInit(): void {
      console.log('On Init ...')
      this.annuaireService.getUsers().subscribe(datas => {
        this.users = datas;
      })
  }
}
