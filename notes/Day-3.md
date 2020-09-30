### 
  template forms:
     Cons:
        data is binded no matter whetehr correct or not
        incorrect data is set to model before validation
        when type small letter, you convert to capital
        trim spaces
        add validations/custom etc...

  reactive forms:
        control over data before bind to model
        manually/code

```
npm install @ngrx/store 
npm install @ngrx/effects


ng g module auth
ng g c auth/components/login
ng g service auth/services/auth-interceptor


```

Components - data
    share data between components
    Input(), to pass down
        one level only,

    want to pass data to 10th level, @Input at each level
    anychanges, must be @Output()

    300+ COMPONENTS

Services  - data
    inject services into componets, rxjs, subjects.. publish data, getter, setters

100 + SERVICES
    Component need data from 20 services
    inject 20 services,


# Store
    instead of keeping in components, or in services, keep data in global store
    one application : one store

    1 STORE

    Want to pick some data? take from store
    Want to update? Update the store

    A lot of additional work needed
    Keep the data which are shared amoung application

    Cart - items - shared
    Auth - user logger
    Profile
    Loop up tables
    Global/shared application state

WHY REDUX/ngrx/why functional programming

OOP: state, mutation
    class Calculator {
        int sum = 0; // state
        // impure function, unpredicatable
        int add(int value) {
            // 10000 liness code..
            sum += value; // state is mutated/changed
            return sum;
        }
    }

    calc = new Calculator()

    calc.add(10); // 10
    calc.add(10); // 20


     calc.add(5); // 25
     calc.add(5);  // 30
     calc.add(5); 
     calc.add(5); 
     calc.add(5);  calc.add(5); 
     calc.add(5);  calc.add(5); 
     calc.add(5);  calc.add(5); 
     calc.add(5);  calc.add(5); 
     calc.add(5);  calc.add(5); 
     calc.add(5);  calc.add(5); 
     calc.add(5);  calc.add(5); 
     calc.add(5);  calc.add(5); 
     calc.add(5); // what is the output?

Functional paradigm/redux way

    //pure function. given same input, return same output
    function add(sum, value) {
        // function doesn't have internal state
        // the value of sum is changed, immutable
        return sum + value;
    }

    add(0, 10); // 10
    add(0, 10); // 10
    add(0, 10); // 10
    add(0, 10); // 10
    add(0, 10); // 10
    add(0, 10); // 10
    add(0, 10); // 10



    increment - OK
    reset - OK
    decrement - YOU

NGRX
    Use angular component for UI
    use Ngrx for Business Logic, API calls, Store, State

inside app folder, create "state" folder

inside "state" folder, create below folders
    actions
    models
    reducers
    states
    effects

Home component
    Increment by Value 5 or 10
    Sum - 0
    Reset



// state/states
        auth.state.ts

   state/actions
      auth.actions.ts

   state/reducers
      auth.reducer.ts

   state/models
      user.ts