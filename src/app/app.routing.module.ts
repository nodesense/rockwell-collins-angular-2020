import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';

import {Route, RouterModule} from '@angular/router';

// create the navigation url mapping
// / - home component
// /about - load and show about component

const routes: Route[] = [
    {
        path: '', // home page, / prefix not needed, should not be used
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    // end of the config
    {
        path: '**', // match all, not found
        component: NotFoundComponent
    }

]

@NgModule({
    imports: [
        CommonModule,
        // forRoot for onetime, mainly for the app module
        // include a lot of services required for navigation
        RouterModule.forRoot(routes),
        RouterModule
    ],
    declarations: [
       // HomeComponent,
       // AboutComponent
    ],

    exports: [
        // components, pipes, direction
        // Module, whole module can be exported, it will eb automatically
        // referenced in modules 
        RouterModule
    ]
})
export class AppRoutingModule {

}