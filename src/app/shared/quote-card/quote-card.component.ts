import { Component, Input, OnInit } from '@angular/core';
import { MyQuoteService } from 'src/app/my-quote/my-quote.service';
import { Quote } from '../models/quote.model';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.css']
})
export class QuoteCardComponent implements OnInit {
  @Input("quoteInput") quote: Quote;
  @Input("locatedInMyQuote") locatedInMyQuote: boolean;

  constructor(private myQuoteService: MyQuoteService) {

  }

  ngOnInit(): void {
  }

  // Handle when user select a quote card in the my quote
  onSelectQuote()
  {
    if (this.locatedInMyQuote){
      // annouce to the my-quote component that we are not in edit mode (in case if we are in) when use click on the quote card
      this.myQuoteService.isEditMode.next(false);

      // announce a quote has been selected
      this.myQuoteService.quoteSelected.next(this.quote);
    }
  }

}
