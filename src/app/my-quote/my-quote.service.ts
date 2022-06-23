import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Quote } from "../shared/models/quote.model";
import { QuoteListComponent } from "./quote-list/quote-list.component";

@Injectable({
  providedIn: "root"
})
export class MyQuoteService{
  quoteSelected: BehaviorSubject<Quote>;
  quoteListUpdated: Subject<boolean>;
  isEditMode: Subject<boolean>;

  public quoteList = [
    new Quote("The way I see it, if you want the rainbow, you gotta put up with the rain",
    "Dolly Parton",
    "Motivational",
    "Some note ...",
    "https://c.tadst.com/gfx/900x506/rainbow.jpg?1"
    ),
    new Quote("Other things may change us, but we start and end with the family",
    "Anthony Brandt",
    "Family",
    "Some note ...",
    "https://nprecovery.com/wp-content/uploads/2018/10/Family.jpg"
    ),
    new Quote("Every new friend is a new adventure ... the start of more memories",
    "Patrick Lindsay",
    "Friends",
    "Some note ...",
    "https://images.hindustantimes.com/img/2021/07/31/1600x900/Happy_Friendship_Day_2021_1627730174856_1627730182001.png"
    )
    ]

  constructor()
  {
    this.quoteSelected = new BehaviorSubject(null);
    this.quoteListUpdated = new Subject();
    this.isEditMode = new Subject();
  }

  // CREATE
  public addQuote(quote: Quote)
  {
    this.quoteList.push(quote);
    this.quoteListUpdated.next(true);
  }

  // READ MANY
  public getQuotes()
  {
    return this.quoteList.slice();
  }

  // UPDATE
  public updateQuote(oldQuote: Quote, newQuote: Quote)
  {
    // find the oldQuote location in the list
    let index = this.quoteList.indexOf(oldQuote);

    // update the oldQuote with the new Quote
    this.quoteList[index] = newQuote;

    // emit an event let the component that uses the quote list aware of the updation of the list of quotes
    this.quoteListUpdated.next(true);

    console.log(this.quoteList)
  }


  // DELETE
  public deleteQuote(quote: Quote)
  {
    // find the quote index
    let index = this.quoteList.indexOf(quote);

    // delete the quote at the specified index
    this.quoteList.splice(index, 1);

    // emit an event let relevant component know the updation of the list of quotes
    this.quoteListUpdated.next(true);
  }
}
