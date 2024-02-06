import { Component, OnInit, input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { UserService } from '../../services/user.service';
import { PhoneService } from '../../services/phone.service';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit{

  user: any
  isAddForm : any
  
  phones: any
  emails: any

  constructor(
    private router: Router,

    private route: ActivatedRoute,
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
    
  }

  onSubmit() {
    console.log('Formulaire soumis !')
    if(this.isAddForm){
      this.userService.addUser(this.user).subscribe((user) => {
        this.router.navigate(['/user', user.id])
      })
    }else{
      forkJoin([
      this.userService.updateUser(this.user),
      

      ]).subscribe(user => {
          this.router.navigate(['/user', this.user.id])
      })
    }
    
    
    // this.user = new User(11, 'Jean', 'Dupont', '123 rue de la poste', '75000', 'Paris')
    console.table('user-form...this.user : '+ this.user)
  }

  updateData(user: any, phones: any, emails: any){
    this.user = user
    this.phones = phones
    this.emails = emails
  }
}
