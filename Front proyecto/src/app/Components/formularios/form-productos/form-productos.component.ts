import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-productos',
  templateUrl: './form-productos.component.html',
  styleUrls: ['./form-productos.component.css']
})
export class FormProductosComponent {
  
  productosForm= new FormGroup({
    desPro: new FormControl('',Validators.required),
    nomPro: new FormControl('',Validators.required),
    preProd: new FormControl('',Validators.required),
    existe: new FormControl('',Validators.required),
    fechProd: new FormControl('',Validators.required),
    cantMax: new FormControl('',Validators.required),
    cantMin: new FormControl('',Validators.required),
    foto: new FormControl('',Validators.required),
    catProd: new FormControl('',Validators.required),
   
  });

  async onSubmit(){
    console.log(this.productosForm.controls["desPro"].value);
    console.log(this.productosForm.controls["nomPro"].value);
    console.log(this.productosForm.controls["preProd"].value);
    console.log(this.productosForm.controls["existe"].value);
    console.log(this.productosForm.controls["fechProd"].value);
    console.log(this.productosForm.controls["cantMax"].value);
    console.log(this.productosForm.controls["cantMin"].value);
    console.log(this.productosForm.controls["foto"].value);
    console.log(this.productosForm.controls["catProd"].value);
  }

}
