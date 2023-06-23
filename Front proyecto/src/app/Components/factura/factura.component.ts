import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { FormFacturaComponent } from '../formularios/form-factura/form-factura.component';
import { FormsService } from 'src/app/Services/forms.service';
import { MatDialog } from '@angular/material/dialog';
import { TableService } from 'src/app/Services/table.service';

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
  modal: any;

  constructor(public api:ApiService ,public forms: FormsService, private dialog: MatDialog,public ValTemplate:TableService){
    this.dataSource= new MatTableDataSource
  }

  ngOnInit(): void {
    this.getProductos();
  }


  public async getProductos(){
    await this.api.getAll("Facturas").then((res)=> {
    this.loadTable([res[0]])

    this.dataSource.data=res;
     this.getAllFk();
    })
    
  }

  public loadTable(data:any[]){
    this.displayedColumns=[];
    for(let colummns in data[0]){
      this.displayedColumns.push(colummns);
    }
    this.displayedColumns.push(this.ValTemplate.ValColumns(this.displayedColumns));
  }
  

  public getAllFk():void{
    let RstFilter=[];
      this.api.getAll('Personas').then((resp:any)=>{
          
      }) 
  }

}
