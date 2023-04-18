import { Component } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent {
constructor(public api:ApiService){

}
ngOnInit(): void{
  var response=this.api.getAll("Proveedors")
  console.log(response);
  
}
}
