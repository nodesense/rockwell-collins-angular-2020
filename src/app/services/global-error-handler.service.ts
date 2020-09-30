import { ErrorHandler, Injectable } from '@angular/core';
import { RouteConfigLoadEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor() { }

  handleError(error: any) {
    // TODO: may go to error page
    // TODO: report the error backend, so that we know exact error, trace
    console.group("App Error")
    console.error("Unexpected error in angular app");
    console.error("Exception ", error)
    console.groupEnd();
  }
}
