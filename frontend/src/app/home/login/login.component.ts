import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public message: string;
  public loginData: any;
  public horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  public VerticalPosition: MatSnackBarVerticalPosition = 'top';
  public duratioInseconds: number;

  constructor(
    private _router: Router,
    private _userService: UserService,
    private _snackbar: MatSnackBar
  ) {
    this.message = '';
    this.loginData = {};
    this.duratioInseconds = 2;
  }

  ngOnInit(): void {}

  login() {
    if(!this.loginData.email || !this.loginData.password){
      this.message  = "Sorry please check password or the email";
      this.openSnackBarError();
      this.loginData={};
    }else{
      this._userService.login(this.loginData).subscribe(
        (res)=>{
          localStorage.setItem('token',res.jwt);
          this._router.navigate(['/listTask']);
          this.loginData={}
         
        },
        (err)=>{
          this.message = err.error;
          this.openSnackBarError();
          this.loginData={}
        }
      )
    }
  }

  openSnackBarError() {
    this._snackbar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.VerticalPosition,
      duration: this.duratioInseconds * 1000,
      panelClass: ['style-snackBarFalse'],
    });
  }
}
