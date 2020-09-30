
import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../models/user';
import AuthState, {initializeState} from '../states/auth.state';

import * as AuthActions from '../actions/auth.actions';
 
export const intialState = initializeState();

// should never write async in reducer, only sync code
// async code should go in effects
const reducer = createReducer(
  intialState,
  on(AuthActions.LoggedIn, (state: AuthState, {payload}) => {
    return { ...state, user: payload, is_authenticated: true };
  }),
  on(AuthActions.LoggedOut, (state: AuthState, {  }) => {
    return { ...state, user: undefined, is_authenticated: false };
  })
);

export function AuthReducer(state: AuthState | undefined, action: Action) {
  console.log('AuthReducer', state, 'action', action)
  return reducer(state, action);
}