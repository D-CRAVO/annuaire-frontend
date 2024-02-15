import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnuaireService {

  readonly API_URL = "http://localhost:8080"

  constructor(
    // private httpClient: HttpClient
  ) { 
  }
}
