import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Quote } from 'src/app/shared/models/quote.model';
import { MyQuoteService } from '../my-quote.service';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  quoteSelected: Quote;
  constructor(private myQuoteService: MyQuoteService) { }

  ngOnInit(): void {
    this.sub = this.myQuoteService.quoteSelected.subscribe((quote)=>{
      this.quoteSelected = quote;
    })
  }

  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }

  onDeleteQuote(){
    // delete the quote from the quote list in the myQuote Service
    this.myQuoteService.deleteQuote(this.quoteSelected);

    // no quote selected
    this.quoteSelected = null;
  }

  onEditQuote(){
    this.quoteSelected = null;
    // update the mode
    this.myQuoteService.isEditMode.next(true);
  }
}
