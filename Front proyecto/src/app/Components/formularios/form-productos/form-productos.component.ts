import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';

@Component({
  selector: 'app-form-productos',
  templateUrl: './form-productos.component.html',
  styleUrls: ['./form-productos.component.css']
})
export class FormProductosComponent  implements OnInit{
 

  constructor (public forms: FormsService){ }
  ngOnInit(): void {
    this.forms.element.subscribe((res:any)=>{
      console.log(res)
      if(res!=""){
        this.productosForm.setControl('desPro', new FormControl(res.descripcionPro));
        this.productosForm.setControl('preProd', new FormControl(res.precioProd));
        this.productosForm.setControl('fechProd', new FormControl(res.fechaPro));

        this.productosForm.setControl('estado', new FormControl(res.estatus));
        this.productosForm.setControl('nit', new FormControl(res.nit));
        this.productosForm.setControl('nomEmpre', new FormControl(res.nomEmpresa));
        
      }
    })
  }
  
  productosForm= new FormGroup({
    desPro: new FormControl('',Validators.required),
    preProd: new FormControl('',Validators.required),
    fechProd: new FormControl('',Validators.required),
    estado: new FormControl('',Validators.required),
    nit: new FormControl('',Validators.required),
    nomEmpre: new FormControl('',Validators.required),
  });

  

  async onSubmit(){
    console.log(this.productosForm.controls["desPro"].value);
    console.log(this.productosForm.controls["preProd"].value);
    console.log(this.productosForm.controls["fechProd"].value);

    console.log(this.productosForm.controls["estado"].value);
    console.log(this.productosForm.controls["nit"].value);
    console.log(this.productosForm.controls["nomEmpre"].value);
  }

}
