import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';


import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { Product } from '../../models/product';

import {map, filter, debounceTime} from 'rxjs/operators';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
  form: FormGroup;
  searchControl: FormControl;
  products: Product[] = [];
  searchText: any = '';

  constructor(private productService: ProductService, 
              private formBuilder: FormBuilder) {
                  // create a form group, associate with form in html
                  this.searchControl = new FormControl(""); // default value
                  // binding form and control
                  this.form = formBuilder.group({
                    // html name: ts searchControl formcontrol
                    "searchControl": this.searchControl
                  })
  }

  ngOnInit(): void {
      this.searchControl
          .valueChanges
          .pipe (map ( (value: string) => value.trim().toLowerCase()))
          .pipe (filter (value => !!value)) // empty strings not allowed here after
          .pipe( debounceTime(400)) // will wait for 400 ms gap in input string
          .subscribe ( (value: string) => {
             console.log("searching for *" + value +"*");
             // small letter, no empty space, no empty string
             this.searchText = value;

             this.productService.searchProducts(this.searchText)
            .subscribe( (results: any[]) => {
                this.products = results;
            })
          })
  }

}
