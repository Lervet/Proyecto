import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { LoginService } from 'src/app/Services/login.service';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';



@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  us="";
  pass="";
loginForm = new FormGroup({
 usuario: new FormControl('',Validators.required),
 password: new FormControl('',Validators.required),
})

  constructor(public loginservice:LoginService) {}

  async onSubmit() {
    this.us = this.loginForm.controls["usuario"].value;
    this.pass = this.loginForm.controls["password"].value;
    if(this.us=="usuario" && this.pass == "1234"){
      Swal.fire(
        'Bienvenido!',
        'Tus credenciales son correctas!',
        'success'
      )
      localStorage.setItem('login','login');
     this.loginservice.login.next("login");
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Datos incorrectos',
        footer: 'Intente con: usuario: usuario y contraseña: 1234' 
      })
    }
  }
}
