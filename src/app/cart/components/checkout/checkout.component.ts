import { LikeComponent } from './../../../shared/components/like/like.component';
import { Component, OnInit,
         ElementRef, ViewChild
} from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  checkoutLikes = 9875423;

  // #  access the DOM element, Component instance from View to TS component

  // static - true ensure that elements are accessibel in ngInit
  // otherwise ngAfterViewInit...
  @ViewChild("couponInput", {static: true}) // <input #couponInput
  couponElement: ElementRef; // is a wrapper for the DOM

  @ViewChild("discount", {static: true}) // <p #discount
  discountElement: ElementRef;

  @ViewChild("likeComp", {static: true}) // <<app-likes #likeComp
  likeComp: LikeComponent;

  constructor(private cartService: CartService) { 
    console.log('CheckoutComponent created');
  }

  // loaded after displaying view first time
  ngOnInit(): void {
    // access to DOM elements
    // couponElement is elementRef, a wrapper for DOM
    // nativeElement is DOM itself, input 
    this.couponElement.nativeElement.value = "NAVARATRY2020"
    this.discountElement.nativeElement.textContent = "NAVARATRY2020 Coupon Applied";

    // access child components, BUT NOT RECOMMENDED on practices
    console.log("Child component ", this.likeComp)
  }
}
