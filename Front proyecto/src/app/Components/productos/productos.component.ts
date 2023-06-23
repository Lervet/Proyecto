import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { FormPersonasComponent } from '../formularios/form-personas/form-personas.component';
import { FormProductosComponent } from '../formularios/form-productos/form-productos.component';
import { TableService } from 'src/app/Services/table.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  title: string= "Productos";
  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;
  formComponente:any = FormProductosComponent;

  constructor(public api:ApiService, public ValTemplate:TableService){
    this.dataSource= new MatTableDataSource
  }

  ngOnInit(): void {
    this.getProductos();
  }

  public async getProductos(){
    await this.api.getAll("Productoes").then((res)=> {
    this.loadTable([res[0]])
    this.dataSource.data=res;
    })
  }

  public loadTable(data:any[]){
    this.displayedColumns=[];
    for(let colummns in data[0]){
      this.displayedColumns.push(colummns);
    }
    this.displayedColumns.push(this.ValTemplate.ValColumns(this.displayedColumns));
  }
}


