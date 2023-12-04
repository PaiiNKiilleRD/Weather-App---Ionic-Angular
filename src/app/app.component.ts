import { Component } from '@angular/core';
import {WeatherService} from './services/weather.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  // AQUI SE MANDAN A CARGAR LOS DATOS PARA EL CLIMA, OSEA SE MUESTRAN
  // constructor(private weather:WeatherService) {
    
  //   this.weather.getData().subscribe(data=>{

  //     console.warn(data)
  //   })
  // }



}
