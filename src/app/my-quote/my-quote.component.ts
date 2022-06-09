import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MyQuoteService } from './my-quote.service';

@Component({
  selector: 'app-my-quote',
  templateUrl: './my-quote.component.html',
  styleUrls: ['./my-quote.component.css']
})
export class MyQuoteComponent implements OnInit, OnDestroy {
  public isEditMode = false;
  private sub: Subscription;

  constructor(private myQuoteService: MyQuoteService) { }

  ngOnInit(): void {
    // listen if we are currently in the edit mode so that we can correctly choose quote-detail component or quote-edit component to display
    this.sub = this.myQuoteService.isEditMode.subscribe((value) => {
      this.isEditMode = value;
    })
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }
}
