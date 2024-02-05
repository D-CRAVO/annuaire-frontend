import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnuaireService {

  readonly API_URL = "http://localhost:8080"

  
  
  
  readonly ENDPOINT_EMAILS = "/emails"

  constructor() { 

  }

  
  

  

  getEmailsByUserId(userId: number){
    return this.httpClient.get(this.API_URL+`/${userId}`+this.ENDPOINT_EMAILS);
  }
}
