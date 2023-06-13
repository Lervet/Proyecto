import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';

@Component({
  selector: 'app-form-proveedor',
  templateUrl: './form-proveedor.component.html',
  styleUrls: ['./form-proveedor.component.css']
})
export class FormProveedorComponent {

  constructor (public forms: FormsService){ }
  ngOnInit(): void {
    this.forms.element.subscribe((res:any)=>{
      if(res!=""){
        this.proveedorForm.setControl('estado', new FormControl(res.estatus));
        this.proveedorForm.setControl('nit', new FormControl(res.nit));
        this.proveedorForm.setControl('nomEmpre', new FormControl(res.nomEmpresa));
      }
    })
  }
  
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