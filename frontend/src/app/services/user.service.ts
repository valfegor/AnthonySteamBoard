import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private env:string;
  constructor(
    private _router: Router,
    private _http: HttpClient,
  ) { 
    this.env = environment.APP_URL
  }

  registerUser(user: any) {
    return this._http.post<any>(this.env + "user/registerUser",user);
  }

  login(user:any){
    return this._http.post<any>(this.env+'user/login',user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }

}
