import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnuaireService {

  readonly API_URL = "http://localhost:8080"

  readonly ENDPOINT_USERS = "/users";
  readonly ENDPOINT_USER = "/user";
  readonly ENDPOINT_PHONES = "/phones"
  readonly ENDPOINT_PHONE = "/phone"
  readonly ENDPOINT_EMAILS = "/emails"

  constructor(private httpClient: HttpClient) { 

  }

  getUsers(){
    return this.httpClient.get(this.API_URL+this.ENDPOINT_USERS);
  }

  getUserById(id: number){
    return this.httpClient.get(this.API_URL+this.ENDPOINT_USER+`/${id}`);
  }

  getPhoneById(id: number){
    return this.httpClient.get(this.API_URL+this.ENDPOINT_PHONE+`/${id}`);
  }

  getPhonesByUserId(userId: number){
    return this.httpClient.get(this.API_URL+`/${userId}`+this.ENDPOINT_PHONES);
  }

  getEmailsByUserId(userId: number){
    return this.httpClient.get(this.API_URL+`/${userId}`+this.ENDPOINT_EMAILS);
  }
}
