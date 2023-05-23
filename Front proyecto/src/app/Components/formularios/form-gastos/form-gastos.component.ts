import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-gastos',
  templateUrl: './form-gastos.component.html',
  styleUrls: ['./form-gastos.component.css']
})
export class FormGastosComponent {
  
  gastosForm= new FormGroup({
    compMer: new FormControl('',Validators.required),
    costPubli: new FormControl('',Validators.required),
   
  });

  async onSubmit(){
    console.log(this.gastosForm.controls["compMer"].value);
    console.log(this.gastosForm.controls["costPubli"].value);
   
  }

}