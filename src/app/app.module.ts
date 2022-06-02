import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuoteLibraryComponent } from './quote-library/quote-library.component';
import { MyQuoteComponent } from './my-quote/my-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteLibraryComponent,
    MyQuoteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
