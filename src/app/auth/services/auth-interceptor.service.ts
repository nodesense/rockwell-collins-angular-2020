// auth/services/auth-interceptor.service.ts
import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

// an application can have as many interceptors
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  // next, next handler, or the calls goes to backend
  // called for every API calls made through http.get,put, delete,...
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any> > {
    console.log('interceptor', request.method, request.url);
    const token = window.localStorage.getItem('token')
    if (token) {
      // if token present, attach in header
      request = request.clone({
        setHeaders: {
          Authorization: `JWT ${token}`
        }
      })
    }

    return next.handle(request)
  }
}
