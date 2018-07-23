import { Component, OnInit } from '@angular/core';
import { PosicionesService } from 'services/posiciones.service';
import { Posicion } from 'models/posicion';
import { Autobus } from 'models/autobus';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  posicionObs: Observable<Posicion>;
  constructor(private posiciones: PosicionesService) { }
  title: string = 'Mapita';
  latI: number = 51.678418;
  lngI: number = 7.809007;
  lat: number = 51.678418;
  lng: number = 7.809007;
  locacionEscogida = false;
  n: number = 0;
  latIss: number = 0;
  lngIss: number = 0;
  numeros: number[] = [60.987, 50.45, 55.12];
  datos:Observable<Posicion>;
  private timer;
  escogerLocacion(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locacionEscogida = true;
    console.log("datos",this.datos);
  }
  ngOnInit() {
    console.log("Los datos estan",this.datos);
    
    this.timer = Observable.timer(10000);
    this.timer.subscribe((t) => this.onTimeOut());
    //this.datos=this.posiciones.moveISS();
  }
  onTimeOut() {
    this.datos=this.posiciones.moveISS();
    this.datos.subscribe((data)=>{
      console.log("los datos devueltos  son",data);
      console.log("el obserbable esta",this.datos);
     /* console.log("latitud del primer dato",data.BusPositions[0].Lat);*/
      this.timer.subscribe((t) => this.onTimeOut());
    });
  }

}
