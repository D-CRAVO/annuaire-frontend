import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnnuaireService } from './annuaire.service';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  readonly ENDPOINT_EMAILS = "/emails"

  constructor(
    private httpClient: HttpClient,
    private annuaireService: AnnuaireService
  ) { }

  getEmailsByUserId(userId: number){
    return this.httpClient.get(this.annuaireService.API_URL +`/${userId}` + this.ENDPOINT_EMAILS)
  }
}
