import { Component, OnInit } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public isLogin = true;
  public errorMsg = null;
  public isLoading = false;

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
  }

  onChangeAuthMode(){
    this.isLogin = !this.isLogin;
  }

  onSubmitAuthForm(authForm: NgForm){
    const {email, password} = authForm.form.value;
    this.isLoading = true;

    this.authService.authenticate(email, password, !this.isLogin).subscribe(
      (responseData) =>{
        console.log(responseData);

        this.router.navigate(["./"]);

        authForm.reset();
      },
      (error) => {
        this.handleAuthError(error);
        console.log(error)
      }
    );
    this.isLoading = false;
  }

  handleAuthError(error)
  {
    if (error && error.error && error.error.error && error.error.error.message)
    {
      switch(error.error.error.message){
        case "INVALID_PASSWORD":
          this.errorMsg = "Password is invalid!"
          break;
        case "EMAIL_EXISTS":
          this.errorMsg = "Email exists!"
          break;
        case "TOO_MANY_ATTEMPTS_TRY_LATER":
          this.errorMsg = "Too many attempts, please try later!"
          break;
        case "EMAIL_NOT_FOUND":
          this.errorMsg = "Email not found!"
          break;
        default:
          this.errorMsg = "Unknown error";
      }
    }
  }

}
