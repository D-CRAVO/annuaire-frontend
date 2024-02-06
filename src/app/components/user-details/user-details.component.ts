import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { PhoneService } from '../../services/phone.service';
import { EmailService } from '../../services/email.service';
import { Subject, forkJoin, takeUntil } from 'rxjs';

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
  isAddForm: any

  constructor(
    private route: ActivatedRoute,
    private router: Router,

    private userService: UserService,
    private phoneService: PhoneService,
    private emailService: EmailService
  ){}

  ngOnInit(){
    this.isAddForm = this.router.url.includes('add')

    if(!this.isAddForm){
      const userId : string | null = this.route.snapshot.paramMap.get('id');

      if (userId){
        forkJoin([
          this.userService.getUserById(+userId), //.subscribe(user => this.user = user)
          this.phoneService.getPhonesByUserId(+userId), //.subscribe(phones => this.phones = phones)
          this.emailService.getEmailsByUserId(+userId) //.subscribe(emails => this.emails = emails)
        ]).subscribe(([user, phones, emails]: [any, any, any]) => {this.updateData(user, phones, emails)})
      }
    }
    

    // if (userId){
    //     this.userService.getUserById(+userId).subscribe(user => this.user = user)
    //     this.phoneService.getPhonesByUserId(+userId).subscribe(phones => this.phones = phones)
    //     this.emailService.getEmailsByUserId(+userId).subscribe(emails => this.emails = emails)
    // }
  }

  updateData(user: any, phones: any, emails: any){
    this.user = user
    this.phones = phones
    this.emails = emails
  }

  goToUserList(){
    this.router.navigate(['/users'])
  }

  goToEditUser(user: any){
    console.table(user)
    this.router.navigate(['edit/user', user.id])
  }

  deleteUser(user: any){
    this.userService.deleteUserById(user.id)
    this.goToUserList;
  }
}
