import { Component } from '@angular/core';
import { LoginService } from './Services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'BlueBell';
 
  constructor(public loginservice:LoginService){
    
  }
  login: String ="login";
  
  ngOnInit():void {
    if(localStorage.getItem('login')===null){
      localStorage.setItem('login','logout');
    }
    if(this.loginservice.login.value == "login"){
      this.loginservice.login.next("login");
    }else{
      this.loginservice.login.next("logout");
    }
    this.loginservice.login.subscribe(value=>{
      this.login = value;
      console.log(this.login);
    })
  }


}
