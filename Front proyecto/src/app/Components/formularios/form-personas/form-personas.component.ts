import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';

@Component({
  selector: 'app-form-personas',
  templateUrl: './form-personas.component.html',
  styleUrls: ['./form-personas.component.css']
})
export class FormPersonasComponent implements OnInit {

  constructor (public forms: FormsService){}
  ngOnInit(): void {
    this.forms.element.subscribe((res:any)=>{
      if(res!=""){
        this.personasForm.setControl('nom', new FormControl(res.nombre));
        this.personasForm.setControl('ape', new FormControl(res.apellidos));
        this.personasForm.setControl('rol', new FormControl(res.rol));
        this.personasForm.setControl('correo', new FormControl(res.correo));
        this.personasForm.setControl('telefono', new FormControl(res.telefono));
        this.personasForm.setControl('tipoDoc', new FormControl(res.tipoDocPersona));
        this.personasForm.setControl('docPer', new FormControl(res.docPersona));
        this.personasForm.setControl('estado', new FormControl(res.estatus));
      }
    })
  }

  personasForm= new FormGroup({
    nom: new FormControl('',Validators.required),
    ape: new FormControl('',Validators.required),
    rol: new FormControl('',Validators.required),
    correo: new FormControl('',Validators.required),
    telefono: new FormControl('',Validators.required),
    tipoDoc: new FormControl('',Validators.required),
    docPer: new FormControl('',Validators.required),
    estado: new FormControl('',Validators.required),
   
  });

  async onSubmit(){
    console.log(this.personasForm.controls["nom"].value);
    console.log(this.personasForm.controls["ape"].value);
    console.log(this.personasForm.controls["rol"].value);
    console.log(this.personasForm.controls["correo"].value);
    console.log(this.personasForm.controls["telefono"].value);
    console.log(this.personasForm.controls["tipoDoc"].value);
    console.log(this.personasForm.controls["docPer"].value);
    console.log(this.personasForm.controls["estado"].value);
  }
}