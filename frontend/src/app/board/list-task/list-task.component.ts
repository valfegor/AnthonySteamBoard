import { Component, OnInit } from '@angular/core';
//se importa el servicio.
import { BoardService } from "../../services/board.service";
import { Router } from "@angular/router";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  public taskData:any;
  public message: string;
  public horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  public VerticalPosition: MatSnackBarVerticalPosition = 'top';
  public duratioInseconds: number;


  constructor(private _boardService:BoardService , private _router:Router , private _snackbar: MatSnackBar) {
    this.message="";
    this.duratioInseconds = 2;
    this.taskData = {}
   }

  ngOnInit(): void {
    
    this._boardService.listTask().subscribe(
      (res)=>{
        console.log(res);
        this.taskData = res.board
        if(this.taskData==0 || this.taskData==[]){
          this.message = "No Task",
          this.openSnackBarSuccesfull();
        }
      },
      (err)=>{
        this.message="Cant save the task please try again";
        this.openSnackBarError();
        this.taskData = {}
      }
    )
  }

  updateTask(task:any,status:string){
    let temporal = task.Status;
    task.Status = status;

    this._boardService.updateTask(task).subscribe(
      (res)=>{
        console.log(task.name)
        this.message = `Status changed in ${task.name}`
        this.openSnackBarSuccesfull();
        task.status = status
      },
      (err)=>{
        task.status = temporal;
        this.message = err.error;
        this.openSnackBarError();
      }
    )

  }

  deleteTask(task:any){
    this._boardService.deleteTask(task).subscribe(
      (res)=>{
        let index = this.taskData.indexOf(task);
        if(index>-1){
          this.taskData.splice(index,1);
          this.message = "Succesfully Erased The task"
          this.openSnackBarSuccesfull();
        }
      },
      (err)=>{
        this.message = "Sorry Cant Eliminate The task";
        this.openSnackBarError();
      }

    )
  }



  openSnackBarSuccesfull() {
    //this.messague = por que ha estado cambiando , {} = CONFIGURACIONES DE LA BARRA , propiedad de la duracion 
    this._snackbar.open(this.message,'X',{
      horizontalPosition:this.horizontalPosition,
      verticalPosition:this.VerticalPosition,
      duration:this.duratioInseconds*1000,
      panelClass:['style-snackBarTrue']
    });
  }

  openSnackBarError() {
    this._snackbar.open(this.message,'X',{
      horizontalPosition:this.horizontalPosition,
      verticalPosition:this.VerticalPosition,
      duration:this.duratioInseconds*1000,
      panelClass:['style-snackBarFalse']
    });
  }

}
