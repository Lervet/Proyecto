import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { FormGastosComponent } from '../formularios/form-gastos/form-gastos.component';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent {
  title: string= "Gastos";
  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;
  formComponente: any = FormGastosComponent;

  
  constructor(public api:ApiService){
    this.dataSource= new MatTableDataSource
  }

  ngOnInit(): void {
    this.getGastos();
  }

  public async getGastos(){
    await this.api.getAll("Gastoes").then((res)=> {
    this.loadTable([res[0]])
    this.dataSource.data=res;
    })
  }

  public loadTable(data:any[]){
    this.displayedColumns=[];
    for(let colummns in data[0]){
      this.displayedColumns.push(colummns);
    }
    console.log(this.displayedColumns);
    this.displayedColumns.push("accion");
    
  }
  
  
}
