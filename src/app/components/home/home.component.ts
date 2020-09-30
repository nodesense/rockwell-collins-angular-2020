import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import {Store, select} from '@ngrx/store';
import {CounterState} from '../../state/states/counter.state';

import * as CounterActions from '../../state/actions/counter.actions';

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

    // dispatch
    // is used to dispatch action to store
    // for every dispatch, reducers are called
    // and matching switch, on(ActionType) is called
    // after dispatch, the new values are turned from the reducer
    // store values are updated
    // susbcribe methods called automaticaly, component get latest value
    const action = CounterActions.IncrementAction({payload: 10});

    this.store.dispatch(action);

  }

  decrement() {
    this.store.dispatch(CounterActions.DecrementAction({payload: 5}))
  }

  reset() {
    // reset value to 0
    this.store.dispatch(CounterActions.ResetAction());
  }

}
