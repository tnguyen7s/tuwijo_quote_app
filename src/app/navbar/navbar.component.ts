import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { MyQuoteService } from '../my-quote/my-quote.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  public isLogin = false;
  public manageExpanded = false;
  private sub: Subscription;
  constructor(private authService: AuthService, private myquoteService: MyQuoteService) {

  }

  ngOnInit(): void {
    this.authService.userAuth.subscribe((value)=>{
      if (!!value) this.isLogin = true;
    })
  }

  onLogOut(){
    this.isLogin = false;
    this.authService.userAuth.next(null);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSaveData() {
    this.myquoteService.saveQuotesToFirebase();
    this.manageExpanded = !this.manageExpanded;
    alert('Your quotes have been saved to the database.')
  }

  onFetchData() {
    this.myquoteService.fetchQuotesFromFirebase();
    this.manageExpanded = !this.manageExpanded;
    alert('Your quotes have been fetched from the database.')
  }

  onToggleManage(){
    if (this.authService.userAuth.value){
      this.manageExpanded = !this.manageExpanded;
    }
  }
}
