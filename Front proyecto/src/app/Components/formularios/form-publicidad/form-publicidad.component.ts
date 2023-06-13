import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';

@Component({
  selector: 'app-form-publicidad',
  templateUrl: './form-publicidad.component.html',
  styleUrls: ['./form-publicidad.component.css']
})
export class FormPublicidadComponent {

  constructor (public forms: FormsService){ }
  ngOnInit(): void {
    this.forms.element.subscribe((res:any)=>{
      if(res!=""){
        this.publicidadForm.setControl('nomPubli', new FormControl(res.nomPubli));
        this.publicidadForm.setControl('tipoPubli', new FormControl(res.tipoPubli));
        this.publicidadForm.setControl('costPubli', new FormControl(res.costoPubli));
        this.publicidadForm.setControl('cantPubli', new FormControl(res.cantidadPubli));
      }
    })
  }
  
  publicidadForm= new FormGroup({
    nomPubli: new FormControl('',Validators.required),
    tipoPubli: new FormControl('',Validators.required),
    costPubli: new FormControl('',Validators.required),
    cantPubli: new FormControl('',Validators.required),

  });

  async onSubmit(){
    console.log(this.publicidadForm.controls["nomPubli"].value);
    console.log(this.publicidadForm.controls["tipoPubli"].value);
    console.log(this.publicidadForm.controls["costPubli"].value);
    console.log(this.publicidadForm.controls["cantPubli"].value);
    
  }
}