import { Brand } from './../models/brand';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // inject HttpClient service in product service
  constructor(private http: HttpClient) { 
  }
  
  getProducts():Observable<Product[]> {
    return this.http
               .get<Product[]>(`${environment.apiEndPoint}/api/products`);
  }


  getBrands():Observable<Brand[]> {
    return this.http
               .get<Brand[]>(`${environment.apiEndPoint}/api/brands`);
  }

  getProduct(id: number): Observable<Product> {
    return this.http
    .get<Product>(`${environment.apiEndPoint}/api/products/${id}`);
  }

  // returns data saved/created in the db
  saveProduct(product: Product): Observable<Product> {
    // if product.id then edit else create
    // update - put method
    // to create - post method
    if (product.id) {
      // update
      return this.http
                 .put<Product>(`${environment.apiEndPoint}/api/products/${product.id}`,product)
    } else {
      // create 
      return this.http
                 .post<Product>(`${environment.apiEndPoint}/api/products`,product)
    }
  }

  deleteProduct(id: number) {
    return this.http
    .delete<any>(`${environment.apiEndPoint}/api/products/${id}`);
  }

}
