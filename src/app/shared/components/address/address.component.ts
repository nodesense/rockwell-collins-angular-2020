import { Address } from './../../models/address';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Input()
  address: Address;

  constructor() { }

  ngOnInit(): void {
  }

}
