import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Quote } from 'src/app/shared/models/quote.model';
import { MyQuoteService } from '../my-quote.service';

@Component({
  selector: 'app-quote-edit',
  templateUrl: './quote-edit.component.html',
  styleUrls: ['./quote-edit.component.css']
})
export class QuoteEditComponent implements OnInit, OnDestroy {
  public quote: Quote;
  public isChangeMode: boolean = false;

  private sub: Subscription;

  public quoteForm: FormGroup;

  constructor(private myQuoteService: MyQuoteService) {
  }

  ngOnInit(): void {
    this.sub = this.myQuoteService.quoteSelected.subscribe((quote)=>{
      this.quote = quote;

      if (!this.quote){
        this.quote = new Quote("", "", "", "", "");
        this.isChangeMode = false;
      }
      else
      {
        this.isChangeMode = true;
      }

      this.createForm();
    })
  }

  private createForm()
  {
    // create Form
    this.quoteForm = new FormGroup(
      {
        "quoteCtrl": new FormControl(this.quote.content, [Validators.required]),
        "authorCtrl": new FormControl(this.quote.author),
        "tagCtrl": new FormControl(this.quote.tag),
        "imagePathCtrl": new FormControl(this.quote.imagePath),
        "noteCtrl": new FormControl(this.quote.note)
      }
      );
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }

  onSaveQuote(){
    // destructure the form and get form inputs
    const {quoteCtrl, authorCtrl, tagCtrl, imagePathCtrl, noteCtrl} = this.quoteForm.value;

    // create a new quote
    const newQuote = new Quote(quoteCtrl, authorCtrl, tagCtrl, noteCtrl, imagePathCtrl);

    // if on the change mode
    if (this.isChangeMode)
    {
      this.myQuoteService.updateQuote(this.quote, newQuote)
    }
    // if not on the Change mode, but the creating mode
    else
    {
      this.myQuoteService.addQuote(newQuote);
    }

    // get out of the edit mode
    this.quoteForm.reset();
    this.myQuoteService.isEditMode.next(false);
    this.myQuoteService.quoteSelected.next(null);

  }

}
