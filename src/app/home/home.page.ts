import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@capacitor/geolocation';
import { WeatherService } from '../services/weather.service';
import { AppComponent } from '../app.component';



const API_KEY = environment.API_KEY;
const API_URL_WEATHER = environment.API_URL_WEATHER;
const API_URL_GEO = environment.API_URL_GEO;

//const API_KEY_WEATHER = environment.API_KEY_WEATHER;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  loading = true;
  // VARIABLES DEL CLIMA

  today = new Date();
  weatherTemp: any;
  cityName: any;

  weatherDetails: any;
  weatherIcon:any;
// -------------------------
// VARIABLES DEL GPS
  coords:any;
  lat: any;
  lon: any;

  constructor(public httpClient: HttpClient, public gps:Geolocation) {
    this.loadData();
   // this.fetchLocation();
   // alert(this.lat)
  }

  async loadData() {


    // GPS OPTIONS
    let options: PositionOptions = {
      maximumAge: 3000,
      timeout: 10000,
      enableHighAccuracy: true,
    };

    // GPS API
    const location =  await Geolocation.getCurrentPosition(options);
      this.lat = location.coords.latitude;
      this.lon = location.coords.longitude;

    // GEO API
    this.httpClient
      .get<any>(
        `${API_URL_GEO}?lat=${this.lat}&lon=${this.lon}&limit=5&appid=${API_KEY}`
      ).subscribe((geo) => {
          console.log(geo);
          this.cityName = geo[0]["name"];
          
      })
    
    // CLIMA API
    this.httpClient
      .get<any>(
        `${API_URL_WEATHER}?lat=${this.lat}&lon=${this.lon}&limit=5&appid=${API_KEY}`
      )
      .subscribe((results) => {
        console.log(results);
        this.weatherTemp = results['main'];
        this.weatherDetails = results["weather"][0];
        this.weatherIcon = `https://openweathermap.org/img/wn/${this.weatherDetails.icon}@4x.png`;
        
      });
  this.loading = false;
  }

//  async fetchLocation() {
 //   const location =  await Geolocation.getCurrentPosition();
  //  console.warn('location =', location);
  //  this.lat = location.coords.latitude;
  //  this.lon = location.coords.longitude;
    // this.coords = location.coords;
    // console.warn(this.coords.latitude)
    

 // }




  //ORIGINAL SCRIPT
  // async fetchLocation() {
  //   const location = await Geolocation.getCurrentPosition();
  //   console.log('location =', location);
  // }

  // CURRENT WEATHER
  // https://api.openweathermap.org/data/2.5/weather?lat=18.53972116557093&lon=-69.90321496925887&limit=5&appid=8cdbee170470f19ff44e4deb2e58d3d7

  // GEO LOCATION
  // https://api.openweathermap.org/geo/1.0/reverse?lat=18.53972116557093&lon=-69.90321496925887&limit=5&appid=8cdbee170470f19ff44e4deb2e58d3d7

  // const printCurrentPosition = async () => {
  //   const coordinates = await Geolocation.getCurrentPosition();

  //   console.log('Current position:', coordinates);
  // };
}


 // try {
    //   const permissionStatus = await Geolocation.checkPermissions();
    //   console.log('Estado de permiso: ', permissionStatus.location);
    //   if(permissionStatus?.location != 'granted') {
    //     const requestStatus = await Geolocation.requestPermissions();
    //     if(requestStatus?.location != 'granted') {
    //       //go to location settings
    //       return ;
    //     }
    //   }

      // let options: PositionOptions = {
      //   maximumAge: 3000,
      //   timeout: 10000,
      //   enableHighAccuracy: true,
      // };
      // const position = await Geolocation.getCurrentPosition(options);
      // console.warn(position);
      
    // } catch (e) {
    //   console.log(e);
    //   throw(e);
    // }