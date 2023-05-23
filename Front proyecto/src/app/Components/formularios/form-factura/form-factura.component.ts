import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-factura',
  templateUrl: './form-factura.component.html',
  styleUrls: ['./form-factura.component.css']
})

export class FormFacturaComponent {
  
  facturaForm= new FormGroup({
    fecha: new FormControl('',Validators.required),
    cant: new FormControl('',Validators.required),
    formPago: new FormControl('',Validators.required),
    articulo: new FormControl('',Validators.required),
   
  });

  async onSubmit(){
    console.log(this.facturaForm.controls["fecha"].value);
    console.log(this.facturaForm.controls["cant"].value);
    console.log(this.facturaForm.controls["formPago"].value);
    console.log(this.facturaForm.controls["articulo"].value);
  }

}
