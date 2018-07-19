import { Component } from '@angular/core';
import { PosicionesService } from 'services/posiciones.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private posiciones:PosicionesService){}
  title: string = 'Mapita';
  latI: number = 51.678418;
  lngI: number = 7.809007;
  lat: number = 51.678418;
  lng: number = 7.809007;
  locacionEscogida=false;
  escogerLocacion(event){
    this.lat=event.coords.lat;
    this.lng=event.coords.lng;
    this.locacionEscogida=true;
  }
  ngOnInit(){
    console.log("servicio",this.posiciones.regresaDatos());
    this.posiciones.regresaDatos().subscribe((data)=>{
      console.log("acabo",data);
    })
  }

}
