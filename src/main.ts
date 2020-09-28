
// bootstrap file
// the first file to be loaded into the browser

// load/bootstrap the app module 

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';  // AOT/JIT

import { AppModule } from './app/app.module';
 
console.log('loading app module')
platformBrowserDynamic().bootstrapModule(AppModule)