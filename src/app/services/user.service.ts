import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnnuaireService } from './annuaire.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly ENDPOINT_USERS = "/users";
  readonly ENDPOINT_USER = "/user";

  constructor(private httpClient: HttpClient, private annuaireService: AnnuaireService) { }

  getUsers(){
    return this.httpClient.get(this.annuaireService.API_URL+this.ENDPOINT_USERS);
  }

  getUserById(id: number){
    return this.httpClient.get(this.annuaireService.API_URL+this.ENDPOINT_USER+`/${id}`);
  }
}
