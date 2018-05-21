import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation,Geoposition } from '@ionic-native/geolocation';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  // CameraPosition,
  // MarkerOptions,
  // Marker
} from '@ionic-native/google-maps';


declare var google;
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
  providers:[Geolocation]
})
export class MapaPage {
  map: GoogleMap;
  public errores:any;
  public nombre:string;
  public lat:string;
  public long:string;

  public directionsService: any = null;
  public directionsDisplay: any = null;
  public bounds: any = null;
  public myLatLng: any;
  public waypoints: any[];

  public milat:any;
  public milong:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private geolocation: Geolocation) {
    this.nombre=this.navParams.get('nombre');
    this.lat=this.navParams.get('lat');
    this.long=this.navParams.get('long');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
    this.obtenerPosicion();
  }//ionViewDidLoad

  obtenerPosicion(){
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.milat=resp.coords.latitude;
      this.milong=resp.coords.longitude;
      this.loadMap2();
      
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
  }// fin de obtener posicion

  generarTrayecto(){
    this.directionsService = new google.maps.DirectionsService();
    // this.directionsService= GoogleMaps.create.
  }// fin de generar trayecto

  loadMap2() {
    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: this.lat,
           lng: this.long
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
           title: this.nombre,
           icon: 'blue',
           animation: 'DROP',
           position: {
             lat: Number(this.lat),
             lng: Number(this.long)
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


   loadMap(position: Geoposition){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude, longitude);
    
    // create a new map by passing HTMLElement
    let mapEle: HTMLElement = document.getElementById('map_canvas');
  
    // create LatLng object
    let myLatLng = {lat: latitude, lng: longitude};
  
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      let marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: 'Hello World!'
      });
      mapEle.classList.add('show-map');
    });
  }


}// fin de la clase
