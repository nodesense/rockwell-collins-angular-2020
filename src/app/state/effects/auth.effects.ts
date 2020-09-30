import { environment } from './../../../environments/environment';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable()
export class AuthEffects {
    constructor(private http: HttpClient, 
                private action$: Actions) {

                }

    login$: Observable<Action> = createEffect( () => this.action$.pipe(
        ofType(AuthActions.LoginAction),
        mergeMap(action => this.http.post<any>(environment.authEndPoint, action.payload).pipe (map ( (result: User) => {
            console.log("login success")
            return AuthActions.LoggedIn({payload: new User("welcome")})
        }), catchError((error: any) => {
            console.log("Error ", error)
            return of(AuthActions.LoggedInError({  payload: 'Error' })) } ))
        )
    ));
}