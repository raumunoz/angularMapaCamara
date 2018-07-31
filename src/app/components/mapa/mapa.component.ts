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
  observerBus:any;
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
  datosEstacion:Observable<Posicion>;
  obsAutobus:Observable<Autobus>;
  autobusesCordenadas:Autobus;
  private timer;
  private timerAutobus;
  escogerLocacion(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locacionEscogida = true;
   // console.log("datos",this.datosEstacion);
  }
  ngOnInit() {
    //console.log("Los datos estan",this.datosEstacion);
    
   // this.timerAutobus = Observable.timer(10000);
   
    //this.datosEstacion=this.posiciones.moveISS();
    
    
    //this.timerAutobus.subscribe((t) => this.onTimeOut());
    //this.datos=this.posiciones.moveISS();
    this.obsAutobus=this.posiciones.posicionVehiculos();
    this.posiciones.posicionVehiculos().subscribe((bus)=>{
      this.autobusesCordenadas=bus;
     
      console.log(this.autobusesCordenadas);
    });
  }
 /* onTimeOut() {
    this.posiciones.posicionVehiculos().subscribe((bus)=>{
      
      this.autobusesCordenadas=bus;
      console.log("los autobuses son",this.autobusesCordenadas);
     /* console.log("latitud del primer dato",data.BusPositions[0].Lat);
      this.timerAutobus.subscribe((t) => this.onTimeOut());
    });

  }*/

}
