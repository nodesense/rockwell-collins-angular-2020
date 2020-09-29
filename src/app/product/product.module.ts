import { CanEditGuard } from './guards/can-edit.guard';
// product.module.ts
import { SharedModule } from './../shared/shared.module';
import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SaveAlertGuard } from './guards/save-alert.guard';

//FIXME: move to product.routing.module.ts
const routes: Route[] = [
  {
    path: 'products',
    component: ProductHomeComponent,
    // sub-navigation
    children: [
      {
        path: '', // default page, /products
        component: ProductListComponent
      },
      {
        path: 'edit/:id', // products/edit/10
        component: ProductEditComponent,
        canActivate: [CanEditGuard],
        canDeactivate: [SaveAlertGuard]
      },
      {
        path: 'create', // products/create
        component: ProductEditComponent,
        canDeactivate: [SaveAlertGuard]
      },
      {
        path: 'search',
        component: ProductSearchComponent
      }
    ]
  }
]

@NgModule({
  declarations: [ProductHomeComponent, ProductListComponent, ProductTableComponent, ProductGridComponent, ProductEditComponent, ProductSearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProductModule { }
