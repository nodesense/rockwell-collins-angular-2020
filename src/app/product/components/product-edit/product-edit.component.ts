import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// create/ update existing record

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  // products/edit/10 - /:id (id ==> 10) 

  product: Product = new Product(); //

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

}
