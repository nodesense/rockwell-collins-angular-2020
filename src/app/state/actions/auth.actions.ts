import { createAction, props } from '@ngrx/store';
import { User } from '../models/user';

export const LoginAction = createAction(
  '[Auth] Login',
  props<{ payload: {username: String, password: string} }>()
);

export const LoggedIn = createAction(
  '[Auth] LoggedIn',
  props<{ payload: User }>()
);


export const LoggedInError = createAction(
  '[Auth] LoggedIn Error',
  props<{ payload: any }>()
);


export const LoggedOut = createAction('[Auth] LoggedOut');

  