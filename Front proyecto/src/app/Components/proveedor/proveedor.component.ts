import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { FormProveedorComponent } from '../formularios/form-proveedor/form-proveedor.component';
import { TableService } from 'src/app/Services/table.service';
@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent {
  title: string= "Proveedores";
  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;
  formComponente:any = FormProveedorComponent;

  constructor(public api:ApiService, public ValTemplate:TableService){
    this.dataSource= new MatTableDataSource
  }

  ngOnInit(): void {
    this.getProductos();
  }


  public async getProductos(){
    await this.api.getAll("Proveedors").then((res)=> {
    this.loadTable([res[0]])
    this.dataSource.data=res;
    })
    
  }

  public loadTable(data:any[]){
    this.displayedColumns=[];
    for(let colummns in data[0]){
      this.displayedColumns.push(colummns);
    }
    this.displayedColumns.push('action');
  }
}
