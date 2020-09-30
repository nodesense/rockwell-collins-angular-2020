import { AuthInterceptorService } from './services/auth-interceptor.service';
import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

const routes: Route[] = [
  {
    path: 'login',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],

  providers: [
    {
      // multiple instance of interceptor possible
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true, // we don't override other interceptors
    }
  ]
})
export class AuthModule { }
