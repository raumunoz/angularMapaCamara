import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Jsonp ,RequestOptions} from "@angular/http";
import { Posicion } from 'models/posicion';
import { Autobus } from 'models/autobus';
import { Observable } from 'rxjs';

@Injectable()
export class PosicionesService {

  
   


  constructor(public _http: HttpClient, private jsonp: Jsonp) { 

  }
 

  ngOnInit() {
    let obs = this._http.get('https://api.github.com/users/raumunoz');
    obs.subscribe(() => console.log("se cargo el dato"));
  }
  regresaDatos() {

    let obs = this._http.get('https://api.github.com/users/raumunoz');
    return obs;

  }
  moveISS() {
    let obs=this._http.get<Posicion>('http://api.open-notify.org/iss-now.json');
    return obs;
  }
  jsonpCArros() {
    let obs = this.jsonp.request('https://api.transport.nsw.gov.au/v1/gtfs/vehiclepos/buses?debug=true/');
    return obs;
  }
  posicionVehiculos() {

    let obs = this._http.get<Autobus>('https://api.wmata.com/Bus.svc/json/jBusPositions?RouteID=70',{ params:{'api_key':'','Host':'api.wmata.com'} });
    return obs;

  }
  JSONP_CALLBACK = (err, Response) => {
    // output: {"id":100}
    if (err) {
      console.log(err);
    } else {
      console.log(Response);
    }
  }

}
