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
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
  ){}

  ngOnInit(){

    this.isAddForm = this.router.url.includes('add')

    if(!this.isAddForm){
      const userId : string | null = this.route.snapshot.paramMap.get('id');

      if (userId){
        this.userService.getUserById(+userId).subscribe(user => this.user = user)
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
      this.userService.updateUser(this.user).subscribe(() => {
          this.router.navigate(['/user', this.user.id])
      })
    }
    
    
    // this.user = new User(11, 'Jean', 'Dupont', '123 rue de la poste', '75000', 'Paris')
    console.table('user-form...this.user : ')
    console.log(this.user)
  }
}
