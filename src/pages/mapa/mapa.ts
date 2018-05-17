import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  // CameraPosition,
  // MarkerOptions,
  // Marker
} from '@ionic-native/google-maps';
/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  map: GoogleMap;
  public errores:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
    this.loadMap();
  }//ionViewDidLoad

  loadMap() {
    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 43.0741904,
           lng: -89.3809802
         },
         zoom: 18,
         tilt: 30
       }
     };
    this.map = GoogleMaps.create('map_canvas', mapOptions);
    // Wait the MAP_READY before using any methods.
    this.errores= this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
         console.log('Map is ready!');
         // Now you can use all methods safely.
         this.map.addMarker({
           title: 'Ionic',
           icon: 'blue',
           animation: 'DROP',
           position: {
             lat: 43.0741904,
             lng: -89.3809802
           }
         })
         .then(marker => {
           marker.on(GoogleMapsEvent.MARKER_CLICK)
             .subscribe(() => {
               alert('clicked');
             });
         });
 
      });
   }// fin de loadmap

}// fin de la clase
