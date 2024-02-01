import { Component, OnInit } from '@angular/core';
import { AnnuaireService } from './annuaire.service';
import { table } from 'console';
import { UserAndPhones } from './models/userAndPhones';
import { forkJoin, switchMap, of } from 'rxjs';

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
  usersAndPhones: UserAndPhones[] = []



  constructor(private annuaireService: AnnuaireService){
  }

  ngOnInit(): void {
      console.log('On Init ... app.component')
      // const result = this.annuaireService.getUsers().pipe(
      //   switchMap(sourceValue => {
      //     console.log(sourceValue);
      //     return;
      //   })
      // )
      
      const switched = of(1, 2, 3).pipe(switchMap(x => of(x, x ** 2, x ** 3)));
      switched.subscribe(x => console.log(x));

      

      // forkJoin([
      //   this.annuaireService.getUsers()
      // ])
      // this.annuaireService.getUsers().subscribe(users => {
      //   this.users = users;
        
      //   console.table(this.usersAndPhones)
      // });
      // for (const user of this.users) {
      //     this.annuaireService.getPhonesByUserId(user.id).subscribe((phones) => {
      //       this.phones = phones
      //       this.usersAndPhones.push(new UserAndPhones(user.id, this.phones[0].number))
      //       console.table(this.usersAndPhones);
            
      //     });
          // this.annuaireService.getEmailsByUserId(user.id).subscribe((emails) => {
          //   this.emails = emails
          //   console.table(emails)
          // });
        //}
  }

  private updateData(users: any[], phones: any[]) {

  }
}
