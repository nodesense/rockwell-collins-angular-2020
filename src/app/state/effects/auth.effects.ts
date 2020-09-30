
// effects are called as middlewares
// they intercept the actions dispatched to reducers
// where we can write cross cutting concerns code
// 1. Making API calls
// 2. storing tokens to local stoarge
// 3. Check if the data in cache/use cache
// ngrx/effects

// state/effects/auth.effects.ts
import { environment } from './../../../environments/environment';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { User } from '../models/user';

// Effects are nothing but Services
@Injectable()
export class AuthEffects {
    constructor(private http: HttpClient, 
                private action$: Actions) {
                   
                    action$
                   // fitler, that allows once LoginAction
                   .pipe(ofType(AuthActions.LoginAction))
                   .subscribe(action => console.log("***", action))

                }
        
    // login component shall dispatch  LoginAction {username, password}
    // this should an action, that will be dispatched by effects automatically
    login$: Observable<Action> = createEffect ( () => this.action$.pipe(
        ofType(AuthActions.LoginAction),
        // merge the observable returned from http.post
        mergeMap( action => {
            const usernamePassword = action.payload;
            return this.http.post<any>(environment.authEndPoint, action.payload).pipe (map ( (data: any) => {
                console.log("login success ", data);
                // store the token to local storage
                
                window.localStorage.setItem("token", data.token);

                const user = new User(data.identity.id, 
                                        data.identity.name, 
                                        data.identity.roles);
                // this action is automatically dispatched by effects
                return AuthActions.LoggedIn({payload: user})
            }))
        })
    ) ) 
 }