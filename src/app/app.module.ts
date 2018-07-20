import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import {  HttpClientModule } from '@angular/common/http'

import { PosicionesService } from 'services/posiciones.service'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    AgmSnazzyInfoWindowModule,
    AgmJsMarkerClustererModule
  ],
  providers: [PosicionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
