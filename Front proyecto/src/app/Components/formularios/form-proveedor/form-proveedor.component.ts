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
      console.log(res);
      if(res!=""){
        this.proveedorForm.setControl('estado', new FormControl(res.estatus));
        this.proveedorForm.setControl('nit', new FormControl(res.nit));
        this.proveedorForm.setControl('docPer', new FormControl(res.docPersona));
        this.proveedorForm.setControl('telefono', new FormControl(res.telefono));
        this.proveedorForm.setControl('tipoDoc', new FormControl(res.tipoDocPersona
          ));
      }
    })
  }
  
  proveedorForm= new FormGroup({
    estado: new FormControl('',Validators.required),
    nit: new FormControl('',Validators.required),

    docPer: new FormControl('',Validators.required),
    telefono: new FormControl('',Validators.required),
    tipoDoc: new FormControl('',Validators.required),
  });

  async onSubmit(){
    console.log(this.proveedorForm.controls["estado"].value);
    console.log(this.proveedorForm.controls["nit"].value);

    console.log(this.proveedorForm.controls["docPer"].value);
    console.log(this.proveedorForm.controls["telefono"].value);
    console.log(this.proveedorForm.controls["tipoDoc"].value);

  }

}