import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor() { }

  element = new BehaviorSubject({});
}
