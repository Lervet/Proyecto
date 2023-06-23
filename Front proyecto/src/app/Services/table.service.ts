import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }
  responseTable:any
  displayedColumnsTable: string[]
  titleTable:string;


  public ValColumns(displayedColumns:any[]):string{
    return displayedColumns.includes("estatus") ? "action" : "actions";
  }
}
