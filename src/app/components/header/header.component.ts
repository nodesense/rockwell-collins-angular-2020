import { CartService } from './../../cart/services/cart.service';
import { Component, OnInit, 
         Output, EventEmitter
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // in parent component
  // $event is boolean true or false
  // <app-header (logoutEvent)="handleLogout($event)"

  // child to parent, always through event binding (eventName)
  // "Event" is added only demo, not needed
  // <<boolean>> is the data value type that we pass to parent
  @Output()
  logoutEvent: EventEmitter<boolean> = new EventEmitter();

  amount: number;

  //async pipe, make it easy for subscribe

  totalItemsInCart$: Observable<number>;

  constructor(private cartService: CartService) { 
    this.totalItemsInCart$ = this.cartService.itemsCount$;
  }

  ngOnInit(): void {
    // amount is number type, value type
    // this.amount = this.cartService.amount; // calls get amount()

    // subscribe is a callback, called whenever new value published .next(xyz)
    this.cartService.amount$.subscribe ( value => {
      console.log('Amount is ', value);
      this.amount = value;
    } )
  }

  logout() {
    console.log('logout');
    // logic for logout is part of app component,
    // now need to notify parent component
    // child to parent communication always done throug (event)
    
    // FIXME: call parent for logout
    this.logoutEvent.next(true); // emitting an event, subscribed by parent
  }

}
