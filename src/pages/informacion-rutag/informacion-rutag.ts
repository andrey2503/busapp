import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvinciaProvider } from '../../providers/data-provincia/data-provincia';
import { MapaPage }  from '../mapa/mapa';
/**
 * Generated class for the InformacionRutagPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-informacion-rutag',
  templateUrl: 'informacion-rutag.html',
  providers:[DataProvinciaProvider]  
})
export class InformacionRutagPage {
  public id:any;
  public informacion:any;
  public horarios:any;
  public ruta:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public datos_provicia:DataProvinciaProvider) {
    this.id=this.navParams.get('id');
    this.ruta=this.navParams.get('ruta');
    this.informacion=[];
    this.horarios=[];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformacionRutagPage');
    this.getInformacion(this.id);
    this.getHorarios(this.id);
  }

  getHorarios(id_terminal){
    this.datos_provicia.getHorarios(id_terminal).subscribe(data=>{
      this.horarios=data;
    });
  }// in de ger horarios

  getInformacion(id_terminal){
    this.datos_provicia.getTerminal(id_terminal).subscribe(data=>{
      this.informacion=data;
    });
  }// fin de get informacion

  getCargarMapa(nombre,lat,long){
    this.navCtrl.push(MapaPage,{'nombre':nombre,'lat':lat,'long':long});
  }// fin de cargar Mapa

}
