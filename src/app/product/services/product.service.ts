
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // inject HttpClient service in product service
  constructor(private http: HttpClient) { 
  }
  
  getProducts() {
    return this.http
               .get(`${environment.apiEndPoint}/api/products`);
  }
}
