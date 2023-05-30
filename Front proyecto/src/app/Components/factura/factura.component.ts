import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { FormFacturaComponent } from '../formularios/form-factura/form-factura.component';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent {
  title: string= "Factura";
  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;
  formComponente:any = FormFacturaComponent;

  constructor(public api:ApiService){
    this.dataSource= new MatTableDataSource
  }

  ngOnInit(): void {
    this.getProductos();
  }


  public async getProductos(){
    await this.api.getAll("Facturas").then((res)=> {
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
