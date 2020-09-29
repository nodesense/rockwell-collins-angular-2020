import { Brand } from './../../models/brand';
import { Observable } from 'rxjs';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

// create/ update existing record

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  // products/edit/10 - /:id (id ==> 10) 

  product: Product = new Product(); //
  brands$: Observable<Brand[]>;

  // instance of the directive
  //<form #productForm="ngForm"  
  @ViewChild("productForm", {static: true})
  productForm: NgForm;


  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private productService: ProductService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log('id ', id)

    if (id) {
      this.productService.getProduct(id)
                         .subscribe (product => {
                           this.product = product;
                         });
    }

    this.brands$ = this.productService.getBrands();
  }

  cancelEdit() {
    this.router.navigate(['/', 'products']);
    // this.router.navigateByUrl("/products")
  }

  saveProduct() {
     this.productService.saveProduct(this.product)
                        .subscribe( product => {
                          console.log('product saved', product)
                          this.product = product;
                        });
  }

  deleteProduct() {
    this.productService.deleteProduct(this.product.id)
                       .subscribe( data => {
                         this.router.navigateByUrl("/products")
                       })
  }

  get isDirty() {
    return this.productForm.dirty;
  }

}
