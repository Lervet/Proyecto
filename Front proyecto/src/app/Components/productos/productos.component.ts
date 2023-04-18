import { Component } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  constructor(public api:ApiService){

  }
  ngOnInit(): void{
    var response=this.api.getAll("Productoes")
    console.log(response);
    
  }
}


