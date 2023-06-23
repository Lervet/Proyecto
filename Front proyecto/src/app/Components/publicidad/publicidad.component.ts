import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { FormPersonasComponent } from '../formularios/form-personas/form-personas.component';
import { FormPublicidadComponent } from '../formularios/form-publicidad/form-publicidad.component';

@Component({
  selector: 'app-publicidad',
  templateUrl: './publicidad.component.html',
  styleUrls: ['./publicidad.component.css']
})
export class PublicidadComponent {
  title: string= "Publicidad";
  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;
  formComponente:any = FormPublicidadComponent;

  constructor(public api:ApiService){
    this.dataSource= new MatTableDataSource
  }

  ngOnInit(): void {
    this.getProductos();
  }

  public async getProductos(){
    await this.api.getAll("Publicidads").then((res)=> {
    this.loadTable([res[0]])
    this.dataSource.data=res;
    })
  }

  public loadTable(data:any[]){
    this.displayedColumns=[];
    for(let colummns in data[0]){
      this.displayedColumns.push(colummns);
    }
    this.displayedColumns.push('actions');
  }
}
