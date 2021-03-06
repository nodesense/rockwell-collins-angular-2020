import { AuthModule } from './auth/auth.module';
// import { ProductModule } from './product/product.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CartModule } from './cart/cart.module';

// imported from node_modules, vendors, 3rd party
// all vendors code goes into vendors bundle
import {ErrorHandler, NgModule} from '@angular/core';

// imported from relative path, your project code
// all your project code goes into main.js bundle
import {AppComponent} from './app.component';

// All web browser specific implementation here
import {BrowserModule} from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing.module';

// for API calls
import {HttpClientModule} from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { AuthReducer } from './state/reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/effects/auth.effects';
import { CounterReducer } from './state/reducers/counter.reducer';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';

//NgModule is decorator @, meta data for the module
// Actual module is AppModule
// module is logical collection
@NgModule({
    imports: [
        // other module dependencies, 3rd parties, custom modules listed
        HttpClientModule, 
        BrowserModule, // brings many other modules internally CommonModule
        SharedModule,

        CartModule,

        // ProductModule,
        AuthModule,

        AppRoutingModule, // Last one, as it contains wildcard **
        
        // initialize the store, it will have sum value with 0
        StoreModule.forRoot({counter: CounterReducer, 
                             auth: AuthReducer}),

        EffectsModule.forRoot([AuthEffects]),

        // Optional import RouterModule here
        // InventoryModule, ProductModule
    ],
    declarations: [
        // all components, directives, pipes in the module
        AppComponent,
        HomeComponent,
        AboutComponent,
        HeaderComponent,
        FooterComponent,
        NotFoundComponent
        //HomeComponent, FooterComponent, .....
    ],
    providers: [
        // {
        //     provide: LocationStrategy,
        //     useClass: HashLocationStrategy
        // }

        {
            provide: ErrorHandler,
            useClass: GlobalErrorHandlerService
        }

    ], // discussed later, services, DI

    // how angular knows the starting/bootstrap component
    bootstrap: [
        AppComponent, // first component to be loaded
    ],
    //entryComponents, exports - discussed later
})
export class AppModule {
    // TODO: Module initialization code
}
