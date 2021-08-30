import { Injectable } from '@angular/core';
import { Router , CanActivate } from "@angular/router";
import { UserService } from "../services/user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router:Router , private _userService: UserService){

  }
  canActivate():boolean{
    if(!this._userService.loggedIn()){
      this._router.navigate(['/login']);
      return false
    }
    else{
      return true;
    }
  }
  
}
