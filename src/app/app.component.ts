import { Address } from './shared/models/address';
import {Component} from '@angular/core';

// Component is a @ decorator, meta data
// MVW - Model View Whatever(Component) 

@Component({
    // every component shall have its own unique html tag <app-root>
    selector: 'app-root',
    // view, html template/templateUrl
    templateUrl: './app.component.html',
    // style, scopped style applicable only for this component
    styleUrls: [
        './app.component.scss'
    ]
})
export class AppComponent {
    // Models are here as member variables
    appTitle: string = "Product App"
    info = { 'company': 'Training.sh', 
              'year': 2020  }

    headOffice: Address = {city: 'Bengalure', 
                           state: 'KA',
                           pincode: 560001
                        }
}
