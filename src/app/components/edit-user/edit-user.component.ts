import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit, OnDestroy{

  user: any
  subscription: any

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ){
  }

  ngOnInit(): void {

    const userId: string | null = this.route.snapshot.paramMap.get('id')

    console.log('edit-user...userId : ' + userId)
    if (userId){
      this.subscription = this.userService.getUserById(+userId).subscribe(user => this.user = user)
    }
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }
 
}
