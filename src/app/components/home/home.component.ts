import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import {Store, select} from '@ngrx/store';
import {CounterState} from '../../state/states/counter.state';

import * as CounterActions from '../../state/actions/counter.actions';
import { DomSanitizer } from '@angular/platform-browser';

import * as $ from 'jquery';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeLikes = 10000;

  sum: number;

  counter$: Observable<CounterState>;

  script;

  // inject store
  constructor(private store: Store<{counter: CounterState}>,
              private sanitizer: DomSanitizer

    ) {
     this.counter$ = this.store.pipe(select('counter'));

     this.script = sanitizer.bypassSecurityTrustScript(
       ` 
        alert("hi");
     `);

   }

   content = `
    <h2>Web injected data</h2>

   `

   ngAfterViewInit() {

    

    $("#test").click(function() {
      //alert("JQeury")
      $("#testHtml").html( `
      
      <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Checkout Frames v2</title>
  <style>*,*::after,*::before{box-sizing:border-box}html{padding:1rem;background-color:#FFF;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif}#payment-form{width:31.5rem;margin:0 auto}iframe{width:100%}.one-liner{display:flex;flex-direction:column}#pay-button{border:none;border-radius:3px;color:#FFF;font-weight:500;height:40px;width:100%;background-color:#13395E;box-shadow:0 1px 3px 0 rgba(19,57,94,0.4)}#pay-button:active{background-color:#0B2A49;box-shadow:0 1px 3px 0 rgba(19,57,94,0.4)}#pay-button:hover{background-color:#15406B;box-shadow:0 2px 5px 0 rgba(19,57,94,0.4)}#pay-button:disabled{background-color:#697887;box-shadow:none}#pay-button:not(:disabled){cursor:pointer}.card-frame{border:solid 1px #13395E;border-radius:3px;width:100%;margin-bottom:8px;height:40px;box-shadow:0 1px 3px 0 rgba(19,57,94,0.2)}.card-frame.frame--rendered{opacity:1}.card-frame.frame--rendered.frame--focus{border:solid 1px #13395E;box-shadow:0 2px 5px 0 rgba(19,57,94,0.15)}.card-frame.frame--rendered.frame--invalid{border:solid 1px #D96830;box-shadow:0 2px 5px 0 rgba(217,104,48,0.15)}.success-payment-message{color:#13395E;line-height:1.4}.token{color:#b35e14;font-size:0.9rem;font-family:monospace}@media screen and (min-width: 31rem){.one-liner{flex-direction:row}.card-frame{width:318px;margin-bottom:0}#pay-button{width:175px;margin-left:8px}}</style>
</head>

<body>

  <!-- add frames script -->
  <script src="https://cdn.checkout.com/js/framesv2.min.js"></script>

  <form id="payment-form" method="POST" action="https://merchant.com/charge-card">
    <div class="one-liner">
      <div class="card-frame">
        <!-- form will be added here -->
      </div>
      <!-- add submit button -->  
      <button id="pay-button" disabled>
        PAY GBP 24.99
      </button>
    </div>
    <p class="success-payment-message"></p>
  </form>

  <script>
    var payButton = document.getElementById("pay-button");
    var form = document.getElementById("payment-form");

    Frames.init("pk_test_6ff46046-30af-41d9-bf58-929022d2cd14");

    Frames.addEventHandler(
      Frames.Events.CARD_VALIDATION_CHANGED,
      function (event) {
        console.log("CARD_VALIDATION_CHANGED: %o", event);

        payButton.disabled = !Frames.isCardValid();
      }
    );

    Frames.addEventHandler(
      Frames.Events.CARD_TOKENIZED,
      function (event) {
        var el = document.querySelector(".success-payment-message");
        el.innerHTML = "Card tokenization completed<br>" +
          "Your card token is: <span class=\"token\">" + event.token + "</span>";
      }
    );

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      Frames.submitCard();
    });
  </script>

</body>

</html>

      
     `)
    });

   }

  ngOnInit(): void {
     

    //'counter' represent key mentioned in app.module
    // StoreModule.forRoot({counter: CounterReducer}),
    // this can be simplified using async pipe
    // Unsubscribe, otherwise memory leak, issue
    this.store.pipe(select('counter'))
              .subscribe( counter => {
                console.log('Home comp, store subscribe ', counter);
                this.sum = counter.sum;
              })
  }

  increment() {

    // dispatch
    // is used to dispatch action to store
    // for every dispatch, reducers are called
    // and matching switch, on(ActionType) is called
    // after dispatch, the new values are turned from the reducer
    // store values are updated
    // susbcribe methods called automaticaly, component get latest value
    const action = CounterActions.IncrementAction({payload: 10});

    this.store.dispatch(action);

  }

  decrement() {
    this.store.dispatch(CounterActions.DecrementAction({payload: 5}))
  }

  reset() {
    // reset value to 0
    this.store.dispatch(CounterActions.ResetAction());
  }

  throwError() {
    throw new Error("Boom")
  }

}
