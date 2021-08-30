import { Component, OnInit } from '@angular/core';
import { BoardService } from "../../services/board.service";
import { MatTableDataSource } from "@angular/material/table";



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})



export class TableComponent implements OnInit {
  public taskData:any;
  public columns:any;
  constructor(private _boardService:BoardService) {
  this.taskData=[];
  this.columns=['nombre','descripcion','Status','Created-AT'];
   }
  ngOnInit(): void {
   
    this._boardService.listTask().subscribe(
      (res)=>{
        this.taskData = res.board;
        console.log(this.taskData)
      },
      (err)=>{
        console.log(err.error);
      }
    )
  }

  
  
  


}

