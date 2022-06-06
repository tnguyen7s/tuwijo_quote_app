import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  public quotes = [
  {
    quote: "The way I see it, if you want the rainbow, you gotta put up with the rain",
    author: "Dolly Parton",
    tag: "Motivational",
    note: "Some note ...",
    imagePath: "https://c.tadst.com/gfx/900x506/rainbow.jpg?1"
  },
  {
    quote: "Other things may change us, but we start and end with the family",
    author: "Anthony Brandt",
    tag: "Family",
    note: "Some note ...",
    imagePath: "https://nprecovery.com/wp-content/uploads/2018/10/Family.jpg"
  },
  {
    quote: "Every new friend is a new adventure ... the start of more memories",
    author: "Patrick Lindsay",
    tag: "Friends",
    note: "Some note ...",
    imagePath: "https://images.hindustantimes.com/img/2021/07/31/1600x900/Happy_Friendship_Day_2021_1627730174856_1627730182001.png"
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
