import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";
import { MyQuoteComponent } from "./my-quote/my-quote.component";
import { QuoteLibraryComponent } from "./quote-library/quote-library.component";

const routes: Routes = [
  {path: "", redirectTo: "/my-quote", pathMatch: "full"},
  {path: "my-quote", component: MyQuoteComponent, canActivate: [AuthGuard]},
  {path: "quote-library", component: QuoteLibraryComponent, canActivate: [AuthGuard]},
  {path: "auth", component: AuthComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
