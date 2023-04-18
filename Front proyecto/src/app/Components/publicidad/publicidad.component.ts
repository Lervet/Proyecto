import { Component } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-publicidad',
  templateUrl: './publicidad.component.html',
  styleUrls: ['./publicidad.component.css']
})
export class PublicidadComponent {
constructor(public api:ApiService){
}
ngOnInit(): void{
  var response=this.api.getAll("Publicidads")
  console.log(response);
  
}
}
