
```
  ng new product-app
  cd product-app

  ng serve
```

```
    ng generate component components/home
    ng g c components/about
    ng g c components/header
    ng g c components/footer
```


```
    Angular Language Service extention
    Debugger for Chrome

Optional:
    Auto Import 1.x


```

create angular module, to have code shared across the application code

```
    ng g module shared

    ng g c shared/components/address

    ng g interface shared/models/address

    ng g pipe shared/pipes/sort


```

shared module contains address component

app.module, add imports to shared module

then use address component in app module component, footer


``` 
    ng g module cart

    ng g c cart/components/cart
    ng g c cart/components/checkout

    ng g class cart/models/cart-item
    ng g class cart/models/order

    ng g service cart/services/cart
```