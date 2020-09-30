import { User } from '../models/user';

export default class AuthState {
  user: User;
  is_authenticated: Boolean;
}

export const initializeState = (): AuthState => {
  return { user: undefined, is_authenticated: false };
};