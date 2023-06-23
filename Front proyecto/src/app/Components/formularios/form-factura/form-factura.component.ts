import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
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
        this.facturaForm.setControl('correo', new FormControl(res.correo));
        this.facturaForm.setControl('telefono', new FormControl(res.telefono));
        this.facturaForm.setControl('tipoDoc', new FormControl(res.tipoDocPersona));
        this.facturaForm.setControl('docPer', new FormControl(res.docPersona));
      }
    })
  }
  
  facturaForm= new FormGroup({
    fecha: new FormControl('',Validators.required),
    cant: new FormControl('',Validators.required),
    formPago: new FormControl('',Validators.required),
    correo: new FormControl('',Validators.required),
    telefono: new FormControl('',Validators.required),
    tipoDoc: new FormControl('',Validators.required),
    docPer: new FormControl('',Validators.required),
   
  });

  async onSubmit(){
    this.PromiseAsync().then((info:any)=>{
       if(info!=null){
    console.log('Esto es modificar')
       }else{
        console.log('Esto es registrar');
       }
    });
  }

   public async PromiseAsync():Promise<Observable<any>>{
     let response:any;
    this.forms.getFk.subscribe((resp:any)=>{
      response=resp;
    })

   return await response;
  }

}
