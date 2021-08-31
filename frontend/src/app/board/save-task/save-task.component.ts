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
  public selectedFile:any;
  constructor(private _router:Router , private _boardService:BoardService , private _snackbar: MatSnackBar) {
    this.registerData = {}
    this.message = ""
    this.durationInSeconds = 2;
    this.selectedFile=null;
   }

  ngOnInit(): void {
  }

  uploadImg(event:any){
    this.selectedFile = <File>event.target.files[0];
  }

  saveTaskImg() {
    //validamos que lleguen los datos
    if (!this.registerData.name || !this.registerData.description) {
      console.log('Failed process:incomplete data');
      this.message = 'Failed process:imcomplete data';
      this.openSnackBarError();
      this.registerData = {};
    } else {
      const data = new FormData();
      data.append('image',this.selectedFile , this.selectedFile.name);
      data.append('name',this.registerData.name);
      data.append('description',this.registerData.description)
      //servicio de usuario el subscribe es como el trycach
      this._boardService.saveTaskImg(data).subscribe(
        (res) => {
          console.log(res);
          //guardamos en el local storage , para saber que hay un usuario registrado

          //despues los redirecciona a guardar su primera tarea
          this._router.navigate(['/listTask']);

          this.message = 'Succesfull Task Registration';

          this.openSnackBarSuccesfull();

          //despues de todo debe quedar vacio de nuevo
          this.registerData = {};
        },
        (err) => {
          console.log(err);
          this.message = err.error;
          this.openSnackBarError();
        }
      );
    }
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
