// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_KEY: '3639723220c9b72dbab5e2f0474adb47',
  API_URL_WEATHER: 'https://api.openweathermap.org/data/2.5/weather',
  API_URL_GEO: 'https://api.openweathermap.org/geo/1.0/reverse',
};

const firebaseConfig = {
  apiKey: "AIzaSyBzDsmRdndEtDT-Zly9WY0CMy_WzJ2cLLU",
  authDomain: "gpsweatherapp.firebaseapp.com",
  projectId: "gpsweatherapp",
  storageBucket: "gpsweatherapp.appspot.com",
  messagingSenderId: "402656986694",
  appId: "1:402656986694:web:974d8e8404ae19a801ac47"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
