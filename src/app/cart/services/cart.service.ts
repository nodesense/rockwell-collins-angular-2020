import { CartItem } from './../models/cart-item';
import { Injectable } from '@angular/core';

import { Subject, BehaviorSubject } from 'rxjs';

// Service
// To implement Business Logic, independent of UI
// to interface with API services
// to hold application state
// help components to share data especially when multiple levels of hierarchy
// components can share data through services, singleton instance
// or component can have exclusive instance of service, not sharing state
// lazily created, only on need basic
// once created, the same instance is shard if singlton approach followed

// Dependency Injection
// let the framework to create/manage/release the services automatically

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cartItems: CartItem[] = []; // application state
  private _itemsCount: number = 0; // sum of qty
  private _amount: number = 0; // all total

  // observable convention to end with $
  // subject publish data only on .next call
  // default or last known values are not published
  
  //amount$: Subject<number> = new Subject();
  //itemsCount$: Subject<number> = new Subject();

  // behaviour subject cache last known value,
  // last published value
  // if any subscriber subscribe for data, it immediately publish
  // the last known value
  amount$: BehaviorSubject<number> = new BehaviorSubject(this._amount);
  itemsCount$: BehaviorSubject<number> = new BehaviorSubject(this._itemsCount)

  get cartItems() {
    return this._cartItems;
  }

  //  service.amount --> calls getter automaticallly
  get amount() {
    return this._amount;
  }

  // service/this.amount = 200, it will call setter
  set amount(value: number) {
    // boundary check
    if (value < 0) throw new Error("Invalid amount")
    this._amount = value;

    // publish the changed value to subscribers
    this.amount$.next(this._amount); // publish the values
  }

  get itemsCount() {
    return this._itemsCount
  }

  set itemsCount(value: number) {
    this._itemsCount = value;

    this.itemsCount$.next(this._itemsCount)
  }

  calculate() {
      let a = 0, n = 0;
      // for each of/es6
      for(const item of this._cartItems) {
        a += item.price * item.qty;
        n += item.qty;
      }

      // call setter to set value ,and pubish the value
      this.amount = a;
      this.itemsCount = n;
  }

  addItem(item: CartItem) {
    // mutation
    this._cartItems.push(item)
    this.calculate();
  }

  removeItem(id: number) {
    const index = this._cartItems.findIndex( (item) => item.id === id);
    this._cartItems.splice(index, 1);
    this.calculate();
  }

  empty() {
    this._cartItems.splice(0, this._cartItems.length);
    this.calculate();
  }

  constructor() { 
    console.log("CartService created")
  }
}
