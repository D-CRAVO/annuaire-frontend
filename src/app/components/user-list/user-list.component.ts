import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit, OnDestroy{
  users: any
  subscription: Subscription

  constructor(
    private userService: UserService,
    private router: Router
  ){
    this.subscription = new Subscription
  }
  ngOnInit(): void{
    this.subscription = this.userService.getUsers().subscribe(users => this.users = users)
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }
  goToUser(userId: number){
    this.router.navigate(['/user', userId])
  }
}
