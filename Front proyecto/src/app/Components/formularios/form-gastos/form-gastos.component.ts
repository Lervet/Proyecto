import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';

@Component({
  selector: 'app-form-gastos',
  templateUrl: './form-gastos.component.html',
  styleUrls: ['./form-gastos.component.css']
})
export class FormGastosComponent implements OnInit {

  constructor (public forms: FormsService){ }
  ngOnInit(): void {
    this.forms.element.subscribe((res:any)=>{
      console.log(res);
      if(res!=""){
        this.gastosForm.setControl('compMer', new FormControl(res.compraMercancia));
        this.gastosForm.setControl('costPubli', new FormControl(res.costoPublicidad));
        this.gastosForm.setControl('nomPubli', new FormControl(res.nomPubli));
        this.gastosForm.setControl('tipoPubli', new FormControl(res.tipoPubli));
        this.gastosForm.setControl('estado', new FormControl(res.estatus));
        this.gastosForm.setControl('nomEmpre', new FormControl(res.nomEmpresa));
        
      }
    })
  }
  
  gastosForm= new FormGroup({
    compMer: new FormControl('',Validators.required),
    costPubli: new FormControl('',Validators.required),

    nomPubli: new FormControl('',Validators.required),
    tipoPubli: new FormControl('',Validators.required),

    estado: new FormControl('',Validators.required),
    nomEmpre: new FormControl('',Validators.required),
   
  });

  async onSubmit(){
    console.log(this.gastosForm.controls["compMer"].value);
    console.log(this.gastosForm.controls["costPubli"].value);
    console.log(this.gastosForm.controls["nomPubli"].value);
    console.log(this.gastosForm.controls["tipoPubli"].value);
    console.log(this.gastosForm.controls["estado"].value);
    console.log(this.gastosForm.controls["nomEmpre"].value);
   
  }

}