import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './components/address/address.component';

// CommonModule contains ng-content, ngIf, ngFor, ....pipes currency, ...

@NgModule({
  declarations: [
    // private use by this module, within html
    AddressComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    // include few/subset of declared components which can be used outside shared module
    AddressComponent
  ]
})
export class SharedModule { }
