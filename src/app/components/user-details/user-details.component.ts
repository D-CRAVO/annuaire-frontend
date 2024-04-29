import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})

export class UserDetailsComponent implements OnInit, OnDestroy{
  user: any;
  isAddForm: any
  private subscription: Subscription
  constructor(
    private route: ActivatedRoute,
    private router: Router,

    private userService: UserService,
  ){
    this.subscription = new Subscription
  }
  ngOnInit(): void{
    this.isAddForm = this.router.url.includes('add')

    if(!this.isAddForm){
      const userId : string | null = this.route.snapshot.paramMap.get('id')

      if (userId){
        this.subscription = this.userService.getUserById(+userId).subscribe(user => this.user = user)
      }
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  goToUserList(){
    this.router.navigate(['/users'])
  }
  goToEditUser(user: any){
    this.router.navigate(['edit/user', user.id])
  }
  deleteUser(user: any){
    this.userService.deleteUserById(user.id).subscribe(_ => this.goToUserList());
  }
}
