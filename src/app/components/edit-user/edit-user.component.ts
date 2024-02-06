import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { PhoneService } from '../../services/phone.service';
import { EmailService } from '../../services/email.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit{

  user: any
  phones: any
  emails: any
  // user: User |undefined

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private phoneService: PhoneService,
    private emailService: EmailService
  ){}

  ngOnInit(): void {

    const userId: string | null = this.route.snapshot.paramMap.get('id')

    console.log('edit-user...userId : ' + userId)
    if (userId){
      forkJoin([
        this.userService.getUserById(+userId), //.subscribe(user => this.user = user)
        this.phoneService.getPhonesByUserId(+userId), //.subscribe(phones => this.phones = phones)
        this.emailService.getEmailsByUserId(+userId) //.subscribe(emails => this.emails = emails)
      ]).subscribe(([user, phones, emails]: [any, any, any]) => {this.updateData(user, phones, emails)})
    }
    // this.user = new User(11, 'Jean', 'Dupont', '123 rue de la poste', '75000', 'Paris')
    console.table('edit-user...this.user : ' + this.user)
  }

  updateData(user: any, phones: any, emails: any){
    this.user = user
    this.phones = phones
    this.emails = emails
  }
}
