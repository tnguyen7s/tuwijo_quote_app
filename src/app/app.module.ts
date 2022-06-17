import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuoteLibraryComponent } from './quote-library/quote-library.component';
import { MyQuoteComponent } from './my-quote/my-quote.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { QuoteListComponent } from './my-quote/quote-list/quote-list.component';
import { QuoteDetailComponent } from './my-quote/quote-detail/quote-detail.component';
import { QuoteCardComponent } from './shared/quote-card/quote-card.component';
import { HttpClientModule } from '@angular/common/http';
import { QuoteEditComponent } from './my-quote/quote-edit/quote-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteLibraryComponent,
    MyQuoteComponent,
    NavbarComponent,
    QuoteListComponent,
    QuoteDetailComponent,
    QuoteCardComponent,
    QuoteEditComponent,
    AuthComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
