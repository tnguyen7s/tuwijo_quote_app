import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, tap } from "rxjs";
import { Auth } from "./auth.model";

const FIREBASE_SIGNUP_URL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
const FIREBASE_LOGIN_URL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
const FIREBASE_KEY_API = "AIzaSyC_GxUjGi27fJk1f6EzgO6pbMkC26MjXIc";


@Injectable({
  providedIn: "root"
})
export class AuthService{
  public userAuth: BehaviorSubject<Auth> = new BehaviorSubject(null);

  constructor(private http: HttpClient)
  {}

  authenticate(email: string, password: string, firstTime: boolean){
    const body = {
      "email": email,
      "password": password,
      "returnSecureToken": true
    }

    const URL = firstTime? FIREBASE_SIGNUP_URL: FIREBASE_LOGIN_URL;
    return this.http.post(URL+FIREBASE_KEY_API, body)
    .pipe(
      tap(
        (responseData)=>{
          const token = responseData["refreshToken"];
          const expiresIn = parseInt(responseData["expiresIn"]);

          const authObject = new Auth(token, new Date().getTime()/1000+expiresIn);
          console.log(authObject);

          this.userAuth.next(authObject);
        }
    ));
  }
}
