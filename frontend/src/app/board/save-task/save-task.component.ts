import { Component, OnInit } from '@angular/core';
import { BoardService } from "../../services/board.service";
import { Router } from "@angular/router";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-save-task',
  templateUrl: './save-task.component.html',
  styleUrls: ['./save-task.component.css']
})
export class SaveTaskComponent implements OnInit {
  public registerData: any;
  public message: string;
  public horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  public VerticalPosition: MatSnackBarVerticalPosition = 'top';
  public durationInSeconds: number;
  constructor(private _router:Router , private _boardService:BoardService , private _snackbar: MatSnackBar) {
    this.registerData = {}
    this.message = ""
    this.durationInSeconds = 2;
   }

  ngOnInit(): void {
  }

  saveTask(){
    if(!this.registerData.name || !this.registerData.description){
      console.log("Le faltan campos");
      this.message = "Sorry Please check all the camps";
      this.openSnackBarError();
    }else{
      this._boardService.saveTask(this.registerData).subscribe(
        (res)=>{
          this._router.navigate(['/listTask']);
          this.message = "Board Saved Success";
          this.openSnackBarSuccesfull();
          this.registerData = {}
        },
        (err)=>{
          console.log(err);
          this.message = err.error;
          this.openSnackBarError();
          this.registerData={}
        }
      )
    }
    
  }
  openSnackBarSuccesfull() {
    //this.messague = por que ha estado cambiando , {} = CONFIGURACIONES DE LA BARRA , propiedad de la duracion 
    this._snackbar.open(this.message,'X',{
      horizontalPosition:this.horizontalPosition,
      verticalPosition:this.VerticalPosition,
      duration:this.durationInSeconds*1000,
      panelClass:['style-snackBarTrue']
    });
  }

  openSnackBarError() {
    this._snackbar.open(this.message,'X',{
      horizontalPosition:this.horizontalPosition,
      verticalPosition:this.VerticalPosition,
      duration:this.durationInSeconds*1000,
      panelClass:['style-snackBarFalse']
    });
  }
}
