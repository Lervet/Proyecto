import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  login = new BehaviorSubject(localStorage.getItem('login')||"");
  ngOnInit():void{
    this.login.next(localStorage.getItem('login')||"");
  }
}
