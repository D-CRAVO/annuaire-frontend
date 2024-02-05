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

  getEmailsByUSerId(userId: number){
    this.httpClient.get(this.annuaireService.API_URL + this.ENDPOINT_EMAILS)
  }
}
