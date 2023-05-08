import { Component } from '@angular/core';
import { LoginService } from './Services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public loginService: LoginService){

  }
  login: String = "login";
  ngOnInit(): void {
    if(localStorage.getItem('login')===null){
      localStorage.setItem('login','logout');
    }
    if(this.loginService.login.value == "login"){
      this.loginService.login.next("login");
    }else{
      this.loginService.login.next("logout");
    }
    this.loginService.login.subscribe(value => {
      this.login = value;
      console.log(this.login)
    })
      
    
  }

}
