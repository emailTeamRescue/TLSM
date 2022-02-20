import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExternalApiService {

  constructor(
    public httpClient: HttpClient
  ) { }

  getQuotes() {
    const getReqHeaders = new HttpHeaders();
    return this.httpClient.get(
      'https://api.forismatic.com/api/1.0/',
      {
        params: { 'method': 'getQuote', 'lang': 'en', 'format': 'json' }
      }
    )
  }
}
