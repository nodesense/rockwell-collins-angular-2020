import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';



@NgModule({
  declarations: [
    CartComponent,
    CheckoutComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CartComponent,
    CheckoutComponent
  ]
})
export class CartModule { }
