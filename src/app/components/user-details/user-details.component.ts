import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})

export class UserDetailsComponent {
  user: any;
  isAddForm: any

  constructor(
    private route: ActivatedRoute,
    private router: Router,

    private userService: UserService,
  ){}

  ngOnInit(){
    this.isAddForm = this.router.url.includes('add')

    if(!this.isAddForm){
      const userId : string | null = this.route.snapshot.paramMap.get('id')

      if (userId){
        this.userService.getUserById(+userId).subscribe(user => this.user = user)
      }
    }
  }

  goToUserList(){
    this.router.navigate(['/users'])
  }

  goToEditUser(user: any){
    console.table(user)
    this.router.navigate(['edit/user', user.id])
  }

  deleteUser(user: any){
    console.log(user);
    
    this.userService.deleteUserById(user.id)
    this.goToUserList
  }
}
