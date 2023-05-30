import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';

@Component({
  selector: 'app-form-factura',
  templateUrl: './form-factura.component.html',
  styleUrls: ['./form-factura.component.css']
})

export class FormFacturaComponent implements OnInit {
  
  constructor (public forms: FormsService){}
  ngOnInit(): void {
    this.forms.element.subscribe((res:any)=>{
      if(res!=""){
        this.facturaForm.setControl('fecha', new FormControl(res.fechaFactura));
        this.facturaForm.setControl('cant', new FormControl(res.cantidad));
        this.facturaForm.setControl('formPago', new FormControl(res.formaPago));
        this.facturaForm.setControl('articulo', new FormControl(res.correo));
      }
    })
  }
  
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
