import { CartService } from './../../../cart/services/cart.service';
import { CartItem } from './../../../cart/models/cart-item';
import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService,
              private cartService: CartService) { }

  ngOnInit(): void {
    // async call, rxjs, observable, subscribe
    this.productService.getProducts() 
        .subscribe ( products => {
          console.log('received data from api ', products)
          this.products = products as any;
        })
  }

  addToCart(product: Product) {
    const cartItem = new CartItem(product.id, 
                                  product.name, 
                                  1,
                                  product.price);

    this.cartService.addItem(cartItem);  
  }

}
