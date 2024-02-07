import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrl: './search-user.component.css'
})
export class SearchUserComponent implements OnInit{

  searchTerms = new Subject<string>();
  users$ : any;

  constructor(
    private router: Router,
    private userService: UserService
  ){}

  ngOnInit(): void {
      this.users$ = this.searchTerms.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term)=> this.userService.searchUserList(term))
      )
  }

  search(term: string){
    this.searchTerms.next(term)
  }

  goToUserDetails(user: any){
    const link = ['/user', user.id]
    this.router.navigate(link)
  }
}
