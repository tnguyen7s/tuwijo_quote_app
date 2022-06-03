import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MyQuoteComponent } from "./my-quote/my-quote.component";
import { QuoteLibraryComponent } from "./quote-library/quote-library.component";

const routes: Routes = [
  {path: "", redirectTo: "/my-quote", pathMatch: "full"},
  {path: "my-quote", component: MyQuoteComponent},
  {path: "quote-library", component: QuoteLibraryComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
