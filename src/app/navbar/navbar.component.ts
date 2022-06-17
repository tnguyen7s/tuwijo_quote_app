import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  public isLogin = false;
  private sub: Subscription;
  constructor(private authService: AuthService) {

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
}
