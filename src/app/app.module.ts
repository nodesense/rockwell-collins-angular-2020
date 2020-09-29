import { CartModule } from './cart/cart.module';

// imported from node_modules
import {NgModule} from '@angular/core';

// imported from relative path
import {AppComponent} from './app.component';

// All web browser specific implementation here
import {BrowserModule} from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing.module';

//NgModule is decorator @, meta data for the module
// Actual module is AppModule
// module is logical collection
@NgModule({
    imports: [
        // other module dependencies, 3rd parties, custom modules listed
        BrowserModule, // brings many other modules internally CommonModule
        SharedModule,

        CartModule,
        
        AppRoutingModule
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
        //HomeComponent, FooterComponent, .....
    ],
    providers: [], // discussed later, services, DI

    // how angular knows the starting/bootstrap component
    bootstrap: [
        AppComponent, // first component to be loaded
    ],
    //entryComponents, exports - discussed later
})
export class AppModule {
    // TODO: Module initialization code
}
