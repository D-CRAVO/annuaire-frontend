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
  phones: any;
  emails: any;
  usersAndPhones: string[];


  constructor(private annuaireService: AnnuaireService){
    this.usersAndPhones= []
  }

  ngOnInit(): void {
      console.log('On Init ... app.component')
      // this.annuaireService.getUsers().subscribe(data => {
      //   this.users = data;
      // })
      // this.annuaireService.getPhonesByUserId(1).subscribe(data=> {
      //   this.phones = data;
      // })
      // this.annuaireService.getEmailsByUserId(1).subscribe(data=> {
      //   this.emails = data;
      // })

      this.annuaireService.getUsers().subscribe(users => {
        this.users = users;
        console.table(users)
        for (const user of this.users) {
          this.annuaireService.getPhonesByUserId(user.id).subscribe((phones) => {
            this.phones = phones
            console.table(phones)
          });
          this.annuaireService.getEmailsByUserId(user.id).subscribe((emails) => {
            this.emails = emails
            console.table(emails)
          });
        }
      });
  }
}
