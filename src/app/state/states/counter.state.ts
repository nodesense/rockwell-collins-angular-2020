// state/states/counter.state.ts
// no curly brace while importing
export class CounterState {
    sum: number;
} 

//return default initial value for the state
export const initializeState = ():CounterState => {
    return {sum: 0}
}

// meet at 11:15