import { Address } from './../../shared/models/address';
import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

 
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

  highlight: boolean = false;

  buildVersion = environment.buildName;

  constructor() { }

  ngOnInit(): void {
    console.log('typeof info', typeof this.info)
  }

  divClick(event: Event) {
    console.log('divclick event ', event)
  }

  contactUs(event: Event) {
    console.log("event ", event)
    // cancel the bubble event going up
    event.stopPropagation();
  }

}
