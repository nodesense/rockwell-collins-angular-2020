import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, OnChanges {


  @Input() 
  amount: number

  @Input()
  totalItems: number

  // local to component
  discount: number
  grandTotal: number


  constructor() { }

  // based on totalItems in the shopping cart, 0%, 5% or 10 % discount applied

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onchange ', changes)
    
    if (changes.totalItems.currentValue > 10) {
      this.discount = 10;
    } else if (changes.totalItems.currentValue > 5) {
      this.discount = 5;
    } else {
      this.discount = 0;
    }

    this.grandTotal = changes.amount.currentValue - ( (this.discount / 100 ) * changes.amount.currentValue)

    
  }


}
