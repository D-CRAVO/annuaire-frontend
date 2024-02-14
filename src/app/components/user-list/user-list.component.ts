import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  users : any
  

  constructor(
    private userService: UserService,
    private router: Router
  ){}

  ngOnInit(){
    this.userService.getUsers().subscribe(users => this.users = users)
  }

  goToUser(userId: number){
    this.router.navigate(['/user', userId])
  }
}
