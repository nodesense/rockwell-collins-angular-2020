import { CartItem } from './../../models/cart-item';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartPageLikes = 98754;
  
  // both fieldName, orderBy are string type
  // type inference, compiler see the right side value, presume the type
  fieldName = "price"
  orderBy="asc"

  // private means local to component, not accessible in view
  cartItems: CartItem[]; // ref to cartservice.cartItems, mutablity/immutablity matters
  constructor(private cartService: CartService) {
    console.log('CartComponent created');
   
    this.cartItems = this.cartService.cartItems; // calls getter function
   }

  ngOnInit(): void {
  }

  addItem() {
    const id = Math.ceil(Math.random() * 1000000)
    const item = new CartItem(id, 
                              `Product ${id}`, 
                              Math.ceil(Math.random() * 5),
                              Math.ceil(Math.random() * 100)
                              )
    this.cartService.addItem(item)
  }

  removeItem(id: number) {
    this.cartService.removeItem(id)
  }

  emptyCart() {
    this.cartService.empty();
  }

}
