import { Component } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent {
  constructor(public api:ApiService){
  
  }
  ngOnInit(): void{
    var response=this.api.getAll("Facturas")
    console.log(response);
    
  }
}
