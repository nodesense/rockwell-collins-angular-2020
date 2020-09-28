import { Address } from './../../shared/models/address';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // Input is a meta for member variable
  // some data passed from parent to child
  // info, title are basically called as properties of footer component
  // property binding
  // <app-footer [info]="......" title="Welcome"

  @Input()
  info: any; // todo

  @Input()
  title: string; 

  @Input()
  address: Address;

  constructor() { }

  ngOnInit(): void {
    console.log('typeof info', typeof this.info)
  }

}
