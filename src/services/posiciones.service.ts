import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Jsonp } from "@angular/http";
import { Posicion } from '../models/posicion';
import { Observable } from 'rxjs';
@Injectable()
export class PosicionesService {

  constructor(public _http: HttpClient, private jsonp: Jsonp) { }


  ngOnInit() {
    let obs = this._http.get('https://api.github.com/users/raumunoz');
    obs.subscribe(() => console.log("se cargo el dato"));
  }
  regresaDatos() {

    let obs = this._http.get('https://api.github.com/users/raumunoz');
    return obs;

  }
  moveISS() {
    let obs = this._http.get<Posicion>('http://api.open-notify.org/iss-now.json');
    return obs;
  }
  moveCar() {
    let obs = this.jsonp.request('http://api.open-notify.org/iss-now.json?callback=JSONP_CALLBACK');
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
