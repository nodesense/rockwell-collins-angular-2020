import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import AuthState from 'src/app/state/states/auth.state';

import * as AuthActions from '../../../state/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  auth$: Observable<AuthState>

  constructor(private router: Router, 
             private store: Store< {auth: AuthState}>) { 
              this.auth$ = store.pipe(select('auth'))
  }

  ngOnInit(): void {
  }

  login() {
    const info = {username: this.username, password: this.password}
    console.log('dispatching ', info)
    this.store.dispatch(AuthActions.LoginAction({payload: {...info}}))
  }

}
