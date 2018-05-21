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

  getRutas(zona){
    return this.http.get(this.ruta+'/api/public/api/rutas/'+zona);
  }// fin de getRutas

  getHorarios(id_ruta){
    return this.http.get(this.ruta+'/api/public/api/horario/'+id_ruta);    
  }

  getTerminal(id_terminal){
    return this.http.get(this.ruta+'/api/public/api/terminal/'+id_terminal);    

  }

  getPostCentral(){
    
  }

}
