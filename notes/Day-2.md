
```
 ng g c shared/components/like

 ensure that it is exported
```

```
ng g c components/not-found  --skip-import

```

```
git clone https://github.com/nodesense/restful-server

or download as zip and extract from github website  https://github.com/nodesense/restful-server

cd restful-server

npm install

npm start

open the browser, check http://localhost:7070

```

## Nested Navigation

```
ng g module product
ng g c product/components/product-home
ng g c product/components/product-list
ng g c product/components/product-table
ng g c product/components/product-grid
ng g c product/components/product-edit
ng g c product/components/product-search

ng g class product/models/product
ng g class product/models/brand

ng g service product/services/product


ng g guard product/guards/can-edit

Select CanActivate

ng g guard product/guards/save-alert

Unselect using SPACE BAR

use Down Arrow and SPACE BAR to select CanDeactivate

CanDeactivate



```