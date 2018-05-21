import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery';

import { HorarioPage }  from '../horario/horario';
import { InformacionRutagPage } from '../informacion-rutag/informacion-rutag';
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

loadInformacionRuta(id,ruta){
  this.navCtrl.push(InformacionRutagPage,{'id':id,'ruta':ruta});
}

clickMap(zona,ruta){
  this.loadroute(zona);  
  $("#img-h").attr("src",ruta);  
}

loadroute(zona){
  let loader = this.loadingCtrl.create({
    content: "Cargando rutas..."
    });
  loader.present();
  this.datos_provicia.getRutas(zona).subscribe(data=>{
    this.rutas=data;
    console.log(this.rutas);
    loader.dismiss();
    
  });
  // console.log("aqui");
}

}// fin de la clase
