import { Component } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent {
 constructor(public api:ApiService){

 }
 ngOnInit(): void{
  var response=this.api.getAll("Gastoes")
  console.log(response);
  
}
}
