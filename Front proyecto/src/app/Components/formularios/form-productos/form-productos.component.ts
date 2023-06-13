import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';

@Component({
  selector: 'app-form-productos',
  templateUrl: './form-productos.component.html',
  styleUrls: ['./form-productos.component.css']
})
export class FormProductosComponent implements OnInit{

  constructor (public forms: FormsService){ }
  ngOnInit(): void {
    this.forms.element.subscribe((res:any)=>{
      if(res!=""){
        this.productosForm.setControl('desPro', new FormControl(res.descripcionPro));
        this.productosForm.setControl('nomPro', new FormControl(res.nomProveedor));
        this.productosForm.setControl('preProd', new FormControl(res.precioProd));
        this.productosForm.setControl('existe', new FormControl(res.existencia));
        this.productosForm.setControl('fechProd', new FormControl(res.fechaPro));
        this.productosForm.setControl('cantMax', new FormControl(res.cantMaxProd));
        this.productosForm.setControl('cantMin', new FormControl(res.cantMinProd));
        this.productosForm.setControl('foto', new FormControl(res.foto));
        this.productosForm.setControl('catProd', new FormControl(res.categoria));
        
      }
    })
  }
  
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
