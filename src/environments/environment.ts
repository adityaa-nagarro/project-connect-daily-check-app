// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//! In developement mode, the token is taken from _enviroment.prod.ts
import { environment as env } from './_environment.prod';

const token = env.token;
const restAPI = env.restAPIDev;
export const environment = {
  production: true,
  // restAPI: 'https://uni-connect-services.azurewebsites.net/api/v1/',
  restAPI, //dev
  // restAPI: 'http://localhost:3000/api/v1/', //localhost
  token,
  app_version: '1.0.8',
  appName: 'Project Connect',
  appNameSuffix: 'Daily Check - test',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
