import { Pipe, PipeTransform } from '@angular/core';

// pipe is used inside html
// must be part of declarations
// must be exported from module if used in other module
// 2^3 ==>  2 | power:3  passed as argu to transform function

// generic pipe which can sort the data based
// input: collection, array, any array 
// input: field name  name or price or qty or any field...
// reuseable
// input: orderBy, asc, desc

// html {{ cartItems | sort:"price"  }} [orderBy is asc by default]

// html {{ cartItems | sort:"price":"asc"  }}
// list is cartItems, sort is pipe name, price is fieldName, asc is orderBy
// html {{ cartItems | sort:"price":"desc"  }}

//impure pipe (pure: false), transform function called again and again no matter input changed of not, bad for performance

// pure pipe: transform is called only when the inputs changed

@Pipe({
  name: 'sort',
  // pure: false // impure pipe 
})
export class SortPipe implements PipeTransform {
  transform(list: any[], 
            fieldName: string, 
            orderBy:string = "asc"  ): any[] {

    console.log('transform called..')
    if (!list || !fieldName || !orderBy) {
      console.log('returning..')
      return list; // no sorting performed due incomplete parameter list
    }

    console.log('sorting by ', orderBy)

    if (orderBy == "desc") {
      return list.sort ( (left, right) => {
        if (left[fieldName] < right[fieldName])
          return 1;
  
        return -1
    })
    }

    return list.sort ( (left, right) => {
      if (left[fieldName] > right[fieldName])
        return 1;

      return -1
  })
  }
}
