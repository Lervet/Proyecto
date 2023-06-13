import { OnInit, Component, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { FormsService } from 'src/app/Services/forms.service';
import Swal from 'sweetalert2';
import { __values } from 'tslib';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  @Input() title:string;
  @Input() displayedColumns: string[];
  @Input() dataSource: MatTableDataSource<any>;
  @Input() formComponente: any;
  @Input() element: any;
  @Input() componenttable: any;
  @Input() checked: 1;
  @Input() disabled: 0;



  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  Controller: String;

  
  
  constructor(public api:ApiService, public dialog:MatDialog, public forms:FormsService){
    this.dataSource= new MatTableDataSource
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog(element:any){    
    this.forms.element.next(element);
    this.dialog.open(this.formComponente);
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  eliminar(element:any){
    Swal.fire({
      title:'¿Quiere eliminar este campo?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Aceptar',
      denyButtonText: 'Cancelar'

    }).then((res)=>{
      if(res.isConfirmed){
        let b: any =[Object.values(element)[0]];
        this.api.Delete(this.componenttable, b )
        window.location.reload();
        console.log();
      }
    })

  }
  toggle(element: boolean){
    Swal.fire({
      title:'¿Quieres cambiar el estado?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Si',
      denyButtonText: 'No'

    }).then((res)=>{
      if(res.isConfirmed){
        let b: any =[Object.values(element)[0]];
        this.api.Editar(this.componenttable, b )
        window.location.reload();
        console.log();
      }
    })

  }
}

