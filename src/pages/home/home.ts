import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery';

import { HorarioPage }  from '../horario/horario';
import { DataProvinciaProvider } from '../../providers/data-provincia/data-provincia';
import { LoadingController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[DataProvinciaProvider]
})
export class HomePage {
  public rutas:any;
  constructor(public navCtrl: NavController,public datos_provicia:DataProvinciaProvider,public loadingCtrl: LoadingController) {
    this.rutas=[];
  }

  ionViewDidLoad() {

}// ionviewload

loadhorario(id){
  this.navCtrl.push(HorarioPage,{'id':id});
}

clickMap(id,ruta){
  this.loadroute(id);  
  $("#img-h").attr("src",ruta);  
}

loadroute(id){
  let loader = this.loadingCtrl.create({
    content: "Cargando rutas..."
    });
  loader.present();
  this.datos_provicia.getRutas(id).subscribe(data=>{
    this.rutas=data['Esparza'];
    console.log(this.rutas);
    loader.dismiss();
    
  });
  // console.log("aqui");
}

}// fin de la clase
