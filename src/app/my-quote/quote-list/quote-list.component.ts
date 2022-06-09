import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Quote } from 'src/app/shared/models/quote.model';
import { MyQuoteService } from '../my-quote.service';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit, OnDestroy {
  public quoteList: Quote[] = [];
  private sub: Subscription;

  constructor(private myQuoteService: MyQuoteService) {
  }

  ngOnInit(): void {
    // get the quote list from the myQuote Service
    this.quoteList = this.myQuoteService.getQuotes();

    // listen to any update on the quoteList and then update the list of quotes displayed on user's screen
    this.sub = this.myQuoteService.quoteListUpdated.subscribe((value) => {
      if (value){
        this.quoteList = this.myQuoteService.getQuotes();
      }
    });
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }

  onNewQuote(){
    this.myQuoteService.isEditMode.next(true);
  }
}
