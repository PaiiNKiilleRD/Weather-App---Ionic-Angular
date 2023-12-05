import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  // AQUI SE CONFIGURA LA API PARA EL CLIMA
  // getData() {
  //   let url= "https://api.openweathermap.org/data/2.5/weather";
  //   let key= "8cdbee170470f19ff44e4deb2e58d3d7";

  //   let api = url + '?lat=18.53972116557093&lon=-69.90321496925887&limit=5&appid=' + key;

  //   return this.http.get(api);

  // }
  
}
