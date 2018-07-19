import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';

@Injectable()
export class PosicionesService {
  
  constructor(public _http: HttpClient) { }
  
   
    ngOnInit(){
      let obs= this._http.get('https://api.github.com/users/raumunoz');
      obs.subscribe(()=>console.log("se cargo el dato"));
    }
    regresaDatos(){
      
      let obs= this._http.get('https://api.github.com/users/raumunoz');
     return obs;
      
    }
  
}
