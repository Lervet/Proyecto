import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-publicidad',
  templateUrl: './form-publicidad.component.html',
  styleUrls: ['./form-publicidad.component.css']
})
export class FormPublicidadComponent {
  
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