// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {

  production: false,

  RESTAURANT_URL: "https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json",
  PLACES_API_URL: "https://places.ls.hereapi.com/places/v1/discover/here?apiKey=AIzaSyD_3RGCVfePhGufHTwmfARxJYkG8L7EFEY"
  //"&at=37.7942,-122.4070&pretty"
  

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
