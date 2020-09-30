import { CartService } from './../../cart/services/cart.service';
import { Component, OnInit, 
         Output, EventEmitter
} from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import AuthState from 'src/app/state/states/auth.state';
import { LoggedOut } from './../../state/actions/auth.actions';

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

  auth$: Observable<AuthState>


  constructor(private cartService: CartService, 
              private store: Store< {auth: AuthState}> ) { 
    this.totalItemsInCart$ = this.cartService.itemsCount$;

    this.auth$ = store.pipe(select('auth'))
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
  
    // dispatch action
    this.store.dispatch(LoggedOut())
  
  }

}
