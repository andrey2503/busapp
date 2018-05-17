import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProvinciaPage } from '../pages/provincia/provincia';
import { HorarioPage } from '../pages/horario/horario';
import { MapaPage } from '../pages/mapa/mapa';
import { DataProvinciaProvider } from '../providers/data-provincia/data-provincia';
import { GoogleMaps } from '@ionic-native/google-maps';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProvinciaPage,
    HorarioPage,
    MapaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProvinciaPage,
    HorarioPage,
    MapaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvinciaProvider,
    GoogleMaps
  ]
})
export class AppModule {}
