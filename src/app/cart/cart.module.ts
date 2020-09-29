import { Route, RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FormsModule } from '@angular/forms';

//FIXME. for best practice, keep routing in separate module cart.routing.module.ts

const routes: Route[] = [
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  }
];

@NgModule({
  declarations: [
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    RouterModule.forChild(routes), 
    CommonModule,
    SharedModule,
    FormsModule,
    
  ],
  exports: [
    CartComponent,
    CheckoutComponent
  ]
})
export class CartModule { }
