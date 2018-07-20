import { Component } from '@angular/core';
import { PosicionesService } from 'services/posiciones.service';
import { Posicion } from '../models/posicion';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  private timer;
  escogerLocacion(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locacionEscogida = true;
  }
  ngOnInit() {
    this.timer = Observable.timer(10000);
    this.timer.subscribe((t) => this.onTimeOut());
  }
  onTimeOut() {
    this.posiciones.moveISS().subscribe((data)=>{
      console.log("los datos son",data);
      this.latIss=Number(data.iss_position.latitude);
      this.lngIss=Number(data.iss_position.longitude);
      this.timer.subscribe((t) => this.onTimeOut());
    });
  }
}
