import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import {Store, select} from '@ngrx/store';
import {CounterState} from '../../state/states/counter.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeLikes = 10000;

  sum: number;

  counter$: Observable<CounterState>;

  // inject store
  constructor(private store: Store<{counter: CounterState}> ) {
     this.counter$ = this.store.pipe(select('counter'));
   }

  ngOnInit(): void {
     

    //'counter' represent key mentioned in app.module
    // StoreModule.forRoot({counter: CounterReducer}),
    // this can be simplified using async pipe
    this.store.pipe(select('counter'))
              .subscribe( counter => {
                console.log('Home comp, store subscribe ', counter);
                this.sum = counter.sum;
              })
  }

  increment() {
  }

  decrement() {
  }

  reset() {
  }

}
