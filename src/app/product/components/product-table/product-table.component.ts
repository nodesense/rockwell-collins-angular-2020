import { CartService } from './../../../cart/services/cart.service';
import { CartItem } from './../../../cart/models/cart-item';
import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit, OnDestroy {

  products: Product[] = [];

  subscription: Subscription;

  constructor(private productService: ProductService,
              private cartService: CartService) { }

  // after view loaded, ngOnInit called
  ngOnInit(): void {
    console.log('ProductTableComponent ngOnInit')
    // async call, rxjs, observable, subscribe
    
    this.subscription = this.productService.getProducts() 
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

  // is called when component getting destory
  // unsubscribe
  // cancel pending calls
  // stop timer
  ngOnDestroy() {
    console.log("PRoductTable onDestroy")
    // if the work is not completed, it cancel pending call
    // other, no exception through
    this.subscription.unsubscribe();
    this.subscription = null;
  }

}
