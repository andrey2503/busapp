import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HorarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { DataProvinciaProvider } from '../../providers/data-provincia/data-provincia';
import { MapaPage } from '../mapa/mapa';
@IonicPage()
@Component({
  selector: 'page-horario',
  templateUrl: 'horario.html',
  providers:[DataProvinciaProvider]
})
export class HorarioPage {
  public horarios:any;
  public id:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public datos_provicia:DataProvinciaProvider) {
    this.horarios=[];
    this.id=this.navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HorarioPage');
    this.datos_provicia.getHorarios(this.id).subscribe(data=>{
      this.horarios=data[this.id];
    });
  }

  cargar_terminal(){
    this.navCtrl.push(MapaPage);
  }// fin de cargar_terminal

}
