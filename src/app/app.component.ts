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
  constructor() { }

  ngOnInit() {

  }

}
