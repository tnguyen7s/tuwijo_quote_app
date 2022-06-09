import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

const API_ENDPOINT: string = 'https://andruxnet-random-famous-quotes.p.rapidapi.com/?';

@Injectable({
  providedIn: "root"
})
export class QuoteLibraryAPIService{

  constructor(private http: HttpClient)
  {
  }

  get10Quotes(category: string)
  {
    const headers = new HttpHeaders().append("X-RapidAPI-Key",  "ee140b1d12msha2d093155309ba2p14b553jsnbdcaa79cdd26")
                                    .append("X-RapidAPI-Host", "andruxnet-random-famous-quotes.p.rapidapi.com");
    return this.http.get(API_ENDPOINT + `cat=${category}&count=10`, {
      headers: headers
    });
  }
}
