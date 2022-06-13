import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { QuoteLibraryAPIService } from "../quote-library/services/api-http.service";

@Injectable({providedIn: 'root'})
export class DataStorageservice {
  constructor(private http: HttpClient, private quotesService: QuoteLibraryAPIService) {}

  storeQuotes() {
    const quotes = this.quotesService.get10Quotes();
    this.http.put('https://tuwijo-821a6-default-rtdb.firebaseio.com/quotes.json', quotes);

  }
}
