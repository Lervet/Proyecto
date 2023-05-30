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
      if(res!=""){
        this.gastosForm.setControl('compMer', new FormControl(res.fechaFactura));
        this.gastosForm.setControl('costPubli', new FormControl(res.cantidad));
        
      }
    })
  }
  
  gastosForm= new FormGroup({
    compMer: new FormControl('',Validators.required),
    costPubli: new FormControl('',Validators.required),
   
  });

  async onSubmit(){
    console.log(this.gastosForm.controls["compMer"].value);
    console.log(this.gastosForm.controls["costPubli"].value);
   
  }

}