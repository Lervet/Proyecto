import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor() { }

  public element = new BehaviorSubject({});
  public getFk=new BehaviorSubject<any>({});
}
