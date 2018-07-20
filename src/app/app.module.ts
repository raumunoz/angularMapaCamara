import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import {  HttpClientModule } from '@angular/common/http';

import { PosicionesService } from 'services/posiciones.service'; 
import { CamarasService } from 'services/camaras.service';

import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VideoComponent } from './components/video/video.component';


@NgModule({
  declarations: [
    AppComponent,
    VideoComponent
  ],
  imports: [
    VgControlsModule,
    VgCoreModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
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
