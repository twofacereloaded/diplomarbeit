// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',

  firebase: {
    apiKey: 'AIzaSyA5VBlvbTD_Gtl9IwgJc1vdGDZF24K9X5c',
    authDomain: 'diplomarbeit-9dd8c.firebaseapp.com',
    databaseURL: 'https://diplomarbeit-9dd8c.firebaseio.com',
    projectId: 'diplomarbeit-9dd8c',
    storageBucket: 'diplomarbeit-9dd8c.appspot.com',
    messagingSenderId: '532004071803'
  },

  mapbox: {
    accessToken: 'pk.eyJ1IjoidHdvZmFjZXJlbG9hZGVkIiwiYSI6ImNqbGpqZnF5dDBjbWMzcG43YXNmZTU4bG8ifQ.PrYi64e2Nw3V3K7qNWz-Cg'
  },

  googleMapsKey: 'AIzaSyAYgLWmXlH_hSdXG0irotKfKyRblx8ayiQ'

};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
