import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { FormPersonasComponent } from '../formularios/form-personas/form-personas.component';
import { TableService } from 'src/app/Services/table.service';
import { share } from 'rxjs';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})

export class PersonasComponent {
  title: string= "Personas";
  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;
  formComponente:any = FormPersonasComponent;

  constructor(public api:ApiService,public ValTemplate:TableService){
    this.dataSource= new MatTableDataSource
  } 

  ngOnInit(): void {
    this.getProductos();
  }

  public async getProductos(){
    await this.api.getAll("Personas").then((res)=> {
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
