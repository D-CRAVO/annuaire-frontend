import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnnuaireService } from './annuaire.service';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  readonly ENDPOINT_PHONES = "/phones"
  readonly ENDPOINT_PHONE = "/phone"

  constructor(
    private httpClient: HttpClient,
    private annuaireService: AnnuaireService
    ) { }

  getPhonesByUserId(userId: number){
    return this.httpClient.get(this.annuaireService.API_URL+`/${userId}`+this.ENDPOINT_PHONES);
  }

  getPhoneById(id: number){
    return this.httpClient.get(this.annuaireService.API_URL+this.ENDPOINT_PHONE+`/${id}`);
  }
}
