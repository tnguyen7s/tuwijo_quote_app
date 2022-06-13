import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyQuoteService } from '../my-quote/my-quote.service';
import { Quote } from '../shared/models/quote.model';
import { QuoteLibraryAPIService } from './services/api-http.service';

@Component({
  selector: 'app-quote-library',
  templateUrl: './quote-library.component.html',
  styleUrls: ['./quote-library.component.css'],
})
export class QuoteLibraryComponent implements OnInit {
  public quotes: Quote[] = [];
  constructor(private quoteLibraryAPIService: QuoteLibraryAPIService, private myQuoteService: MyQuoteService) {}

  ngOnInit(): void {}

  onSearchQuotes(form: NgForm) {
    const { category } = form.value;

    this.quoteLibraryAPIService.get10Quotes(category).subscribe(
      (responseData) => {
        console.log(responseData);
        this.quotes = [];

        (<Array<Object>>responseData).forEach((element) => {
          const author = element['author'];
          const quote = element['quote'];

          this.quotes.push(new Quote(quote, author, "", "", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1280px-No_image_3x4.svg.png"));
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onAddQuoteToList(index: number){
    this.myQuoteService.addQuote(this.quotes[index])
  }

}
