import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './components/address/address.component';
import { SortPipe } from './pipes/sort.pipe';
import { LikeComponent } from './components/like/like.component';

// CommonModule contains ng-content, ngIf, ngFor, ....pipes currency, ...

@NgModule({
  declarations: [
    // private use by this module, within html
    AddressComponent,
    SortPipe,
    LikeComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    // include few/subset of declared components which can be used outside shared module
    AddressComponent,
    SortPipe,
    LikeComponent
  ]
})
export class SharedModule { }
