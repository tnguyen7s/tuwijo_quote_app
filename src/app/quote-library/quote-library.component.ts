import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QuoteLibraryAPIService } from './services/api-http.service';

@Component({
  selector: 'app-quote-library',
  templateUrl: './quote-library.component.html',
  styleUrls: ['./quote-library.component.css']
})
export class QuoteLibraryComponent implements OnInit {

  constructor(private quoteLibraryAPIService: QuoteLibraryAPIService) { }

  ngOnInit(): void {
  }

  onSearchQuotes(form: NgForm){
    const {category} = form.value;

    this.quoteLibraryAPIService.get10Quotes(category)
                                .subscribe((responseData) => {
                                  console.log(responseData)
                                },
                                (error)=>{
                                  console.log(error)
                                })
  }
}
