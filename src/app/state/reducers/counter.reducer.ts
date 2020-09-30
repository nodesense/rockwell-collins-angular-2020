//state/reducers/counter.reducer.ts

import {Action, createReducer, on} from '@ngrx/store';
import {CounterState, initializeState} from '../states/counter.state';
import * as CounterActions from '../actions/counter.actions';

// initialState => {sum: 0}
export const initialState = initializeState();
const reducer = createReducer(
    initialState,
    // TODOs
);

export function CounterReducer(state: CounterState , action:Action ){
    console.log("CounterReducer state ", state, "action", action)
    return reducer(state as any, action)
}


// reducers? what is does
// reducers are pure functions, given same input, return same output
// write the implementation for actions
// reducer should follow immutablity
// reducer manage the state
// Data is not STORED INSIDE REDUCER
// INSTEAD DATA STORED IN STORE
// function reducer(state, action) {
 //   return newState // newState is stored by store
//}