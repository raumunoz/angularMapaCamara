import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import {  HttpClientModule } from '@angular/common/http';
import { JsonpModule } from '@angular/http'

//import {API} from '../../src/API'

import { PosicionesService } from 'services/posiciones.service'; 
import { CamarasService } from 'services/camaras.service';

import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgStreamingModule } from 'videogular2/streaming';

import { VideoComponent } from './components/video/video.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MapaComponent } from './components/mapa/mapa.component';



@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    NavBarComponent,
    MapaComponent,
    
  ],
  imports: [
    VgControlsModule,
    VgCoreModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    JsonpModule,
    AppRoutingModule,
    VgStreamingModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    AgmSnazzyInfoWindowModule,
    AgmJsMarkerClustererModule
  ],
  providers: [PosicionesService,CamarasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
