import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Quote } from 'src/app/shared/models/quote.model';
import { Injectable } from "@angular/core";
import { MyQuoteService } from "src/app/my-quote/my-quote.service";
import { QuoteListComponent } from "src/app/my-quote/quote-list/quote-list.component";


const API_ENDPOINT: string = 'https://andruxnet-random-famous-quotes.p.rapidapi.com/?';

@Injectable({
  providedIn: "root"
})
export class QuoteLibraryAPIService{

  constructor(
    private http: HttpClient,
    ){}

  get10Quotes(category: string)
  {
    const headers = new HttpHeaders().append("X-RapidAPI-Key",  "ee140b1d12msha2d093155309ba2p14b553jsnbdcaa79cdd26")
                                    .append("X-RapidAPI-Host", "andruxnet-random-famous-quotes.p.rapidapi.com");
    return this.http.get(API_ENDPOINT + `cat=${category}&count=10`, {
      headers: headers
    });
  }
}

export class HTTPService {
  firebaseRootURL ="https://tuwijo-821a6-default-rtdb.firebaseio.com/quotes.json"

  constructor(
    private http: HttpClient,
    private quoteService: MyQuoteService
    ) {}

  saveQuotesToFirebase() {

    const quoteListUpdated: Quote[] = this.quoteService.getQuotes();
    this.http.put(this.firebaseRootURL,quoteListUpdated).subscribe((res) => {});

  }

  fetchQuotesFromFirebase() {
    return this.http.get(this.firebaseRootURL, {}).subscribe((res:Quote[]) =>{
      this.quoteService.getQuotes();
    });
  }
}
