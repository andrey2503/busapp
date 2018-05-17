import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvinciaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvinciaProvider {
  public ruta:string;
  constructor(public http: HttpClient) {
    console.log('Hello DataProvinciaProvider Provider');
    this.ruta="http://52.37.219.174";
    // this.ruta="API";
  }

  getRutas(id){
    return this.http.get(this.ruta+'/busapp/rutas.json');
  }// fin de getRutas

  getHorarios(id){
    return this.http.get(this.ruta+'/busapp/horarios.json');    
  }

  getPostCentral(){
    
  }

}
