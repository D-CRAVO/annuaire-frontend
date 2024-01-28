import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnuaireService {

  readonly API_URL = "http://localhost:8080"

  readonly ENDPOINT_USERS = "/users"

  constructor(private httpClient: HttpClient) { 

  }

  getUsers(){
    return this.httpClient.get(this.API_URL+this.ENDPOINT_USERS)
  }
}
