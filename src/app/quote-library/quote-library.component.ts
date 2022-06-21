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

          this.quotes.push(new Quote(quote, author, "", "", "https://www.shell.com/energy-and-innovation/the-energy-future/scenarios/shell-scenario-sky/_jcr_content/pagePromo/image.img.960.jpeg/1548184031017/clear-blue-sky.jpeg"));
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onAddQuoteToList(index: number){
    this.myQuoteService.addQuote(this.quotes[index])
    alert("A new quote has been added to your list.");
  }

}
