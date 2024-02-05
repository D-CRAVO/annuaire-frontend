import { Component, OnInit } from '@angular/core';
import { AnnuaireService } from './services/annuaire.service';
import { table } from 'console';
import { UserAndPhones } from './models/userAndPhones';
import { forkJoin, switchMap, of } from 'rxjs';
import { User } from './models/User';
import { PhoneService } from './services/phone.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AnnuaireService]
})
export class AppComponent implements OnInit{
  title = 'annuaire-frontend';
  user: any;
  users: any;
  phones: any;
  emails: any;
  usersAndPhones: UserAndPhones[] = []

  test: any;

  constructor(
    private annuaireService: AnnuaireService,
    private phoneService: PhoneService,
    private userService: UserService
    ){
  }

  ngOnInit(): void {
      console.log('On Init ... app.component')
      this.userService.getUsers().subscribe(users => this.users = users)
      
      // const switched = of(1, 2, 3).pipe(switchMap(x => of(x, x ** 2, x ** 3)));
      // switched.subscribe(x => console.log(x));


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

  getUserWithPhones(userId: number){
    
    this.test = this.phoneService.getPhonesByUserId(+userId).subscribe(phones => this.phones = phones)
    console.log(userId)
    return this.test
  }
}
