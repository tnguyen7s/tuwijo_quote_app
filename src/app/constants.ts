// Angular Modules
import { Injectable } from '@angular/core';
@Injectable()
export class constants {
public readonly API_ENDPOINT: string = 'https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=10';
}
import { Component, OnInit } from '@angular/core';
import{ Constants } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title = Constants.TitleOfSite;
    constructor() {
        console.log(constants);
    }
    ngOnInit() {
        console.log(this.title);
    }
}
