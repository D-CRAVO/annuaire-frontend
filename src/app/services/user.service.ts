import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnnuaireService } from './annuaire.service';
import { catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly ENDPOINT_USERS = "/users";
  readonly ENDPOINT_USER = "/user";

  constructor(private httpClient: HttpClient, private annuaireService: AnnuaireService) { }

  getUsers(){
    return this.httpClient.get(this.annuaireService.API_URL + this.ENDPOINT_USERS);
  }

  getUserById(id: number){
    return this.httpClient.get(this.annuaireService.API_URL + this.ENDPOINT_USER + `/${id}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    )
  }

  updateUser(user: any){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.httpClient.put(this.annuaireService.API_URL, user, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    )
  }

  deleteUserById(id: number){
    this.httpClient.delete(this.annuaireService.API_URL + this.ENDPOINT_USER + `/${id}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    )
  }

  addUser(user: any){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.httpClient.post(this.annuaireService.API_URL, user, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    )
  }

  private log(response: any){
    console.table(response);
  }

  private handleError(error: Error, errorValue: any){
    console.error(error);
    return of(errorValue);
  }
}
