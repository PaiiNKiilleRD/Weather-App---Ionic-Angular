import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  public useLocation?: [number,number];

  get isUserLocationReady():boolean {
    return !!this.useLocation;
  }

  constructor() { }


  
}
