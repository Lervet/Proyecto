import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }
  url ="https://localhost:7124/api/";
  /////////Metodo Get All/////////
  async getAll(Controller:String){
    var response:any
    await this.http.get(this.url+Controller).toPromise().then((res=>{
      response=res
    }
      )
    )
    return response;
  }
  /////////Metodo Get ById//////////////
  async getById(Controller:String,id:number){
    var pruebas:any
  await this.http.get(this.url+Controller+id).toPromise().then((res=>{pruebas=res}
      )
    )
    return pruebas
  }
  //////////Metodo Delete////////////
  async Delete(Controller:String,id:number){
    var pruebas:any
  await this.http.delete(this.url+Controller+id).toPromise().then((res=>{pruebas=res}
      )
    )
    return pruebas
  }


}
