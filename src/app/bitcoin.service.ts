import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get('https://api.coindesk.com/v1/bpi/currentprice.json')
  }
}
