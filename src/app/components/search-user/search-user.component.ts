import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrl: './search-user.component.css'
})
export class SearchUserComponent {
  constructor(
    private router: Router
  ){}

  goToUserDetails(user: any){
    const link = ['/user', user.id]
    this.router.navigate(link)
  }
}
