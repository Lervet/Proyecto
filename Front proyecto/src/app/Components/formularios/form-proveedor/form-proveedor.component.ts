import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-proveedor',
  templateUrl: './form-proveedor.component.html',
  styleUrls: ['./form-proveedor.component.css']
})
export class FormProveedorComponent {
  
  proveedorForm= new FormGroup({
    estado: new FormControl('',Validators.required),
    nit: new FormControl('',Validators.required),
    nomEmpre: new FormControl('',Validators.required),
   
   
  });

  async onSubmit(){
    console.log(this.proveedorForm.controls["estado"].value);
    console.log(this.proveedorForm.controls["nit"].value);
    console.log(this.proveedorForm.controls["nomEmpre"].value);
    
  }

}