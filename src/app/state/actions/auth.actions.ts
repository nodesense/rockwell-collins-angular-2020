import { createAction, props } from '@ngrx/store';
import { User } from '../models/user';

// Effects to intercept this
// reducers should not contains async code
// apis to be implemented in effects
export const LoginAction = createAction(
  '[Auth] Login',
  props<{ payload: {username: String, password: string} }>()
);

// store the logged user info in to store
export const LoggedIn = createAction(
  '[Auth] LoggedIn',
  props<{ payload: User }>()
);

// store login error in store
export const LoggedInError = createAction(
  '[Auth] LoggedIn Error',
  props<{ payload: any }>()
);

// user logged, clean local storage, ...
export const LoggedOut = createAction('[Auth] LoggedOut');


export const LoggedOutSuccess = createAction('[Auth] LoggedOutSuccess');
