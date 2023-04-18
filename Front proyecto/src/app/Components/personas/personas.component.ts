import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Vibrador: Verde',
  'Vibrador: Azul',
  'Vibrador: Rojo',
  'Vibrador: Negro',
  'Vibrador: Amarillo',
  'Vibrador: Gris',
  'Vibrador: Multicolor',
  'Vibrador: Cafe',
  'Vibrador: Naranja',
  'Vibrador: Trasparente',

];

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})

export class PersonasComponent {
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;  


  constructor(public api:ApiService){
    this.dataSource = new MatTableDataSource; 

    
  }
  
    ngOnInit(): void{
      this.getPersonas();
    }

    public async getPersonas(){
      // this.api.getAll("Personas");
      await this.api.getAll("Personas").then((res)=> {
       for (let index=0; index < res.length; index++){
        this.loadTable([res[index]])
       } 
       this.dataSource.data=res;
      })
      
    }

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    
    public loadTable(data:any[]){
      this.displayedColumns =[];
      for(let column in data [0]){
        this.displayedColumns.push(column)
      }
    }
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }
  function createNewUser(id: number): UserData {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
      ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
      '.';
  
    return {
      id: id.toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
    };
   
  }
    
