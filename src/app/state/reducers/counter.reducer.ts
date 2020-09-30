//state/reducers/counter.reducer.ts

import {Action, createReducer, on} from '@ngrx/store';
import {CounterState, initializeState} from '../states/counter.state';
import * as CounterActions from '../actions/counter.actions';

// initialState => {sum: 0}
export const initialState = initializeState();
const reducer = createReducer(
    initialState, // default case
    // implementing action, by incrementing sum + value from payload
    // shall be called when do dispatch IncrementAction
    on(CounterActions.IncrementAction, (state: CounterState, action ) => {
        // returned value set back to store
        return { sum: state.sum + action.payload }
    }), 
        // action => {payload: 5}, destructure by defining as {payload}
    on(CounterActions.DecrementAction, (state: CounterState, {payload} ) => {
        // returned value set back to store
        return { sum: state.sum - payload }
    }), 
    // called when dispatch ResetAction
    on(CounterActions.ResetAction, (state: CounterState, action) => {
        return {sum: 0}
    })
    // TODOs Decrement
);

export function CounterReducer(state: CounterState , action:Action ){
    console.log("CounterReducer state ", state, "action", action)
    return reducer(state as any, action)
}

// using reducer with switch statement, you should avoid this, use createReducer instead, don't write this code

// export function CounterReducer(state: CounterState = initialState , action:Action ){
//     console.log("CounterReducer state ", state, "action", action)
//     switch(action.type) {
//         case "[Counter] Increment": return {sum: state.sum + (action as any).payload}
//         //...
//         default: return state
//     }
// }


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