// state/actions/counter.actions.ts

import {createAction, props} from '@ngrx/store';

export const IncrementAction = createAction(
                                // action type
                                '[Counter] Increment', 
                                // action payload
                                props< {payload: number }>()
                                );

//TODO: DecrementAction

export const DecrementAction = createAction(
    // action type
    '[Counter] Decrement', 
    // action payload
    props< {payload: number }>()
    );
    
export const ResetAction = createAction('[Counter] reset'); // no payload


// sum = 0 
// actions increment, decrement or reset are actions
// actions shall have a type (string), unique across application
// best practice, ahve module name [Counter], then action verb (increment, decremnt, reset)
// "[Counter] increment", "[Counter] decrement", "[Counter] reset"

// Action { type, payload} , payload is optional
// payload a data that send along with action
// increment by 10. action type is increment, action payload is 10
// reset. action  type is reset, no payload

// addItemtocart {id:1, price: 100..}, action type is addItemtocart, payload {id:1, price: 100..}

// emptyCart, action type is emptyCart, payload none