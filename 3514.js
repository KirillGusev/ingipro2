//Найти число, повторяющееся нечетное количество раз
//[20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5] // 5
//[1,1,2,-2,5,2,4,4,-1,-2,5] // -1

'use strict';

function numberIn(arr) {
  let count;
  let result = null;
  let processed=[];

  for (let i=0; i< arr.length; i++) {
    count = 0 ;

    if(processed.indexOf(arr[i]) !== -1) {
      continue;
    }

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    processed[processed.length] = arr[i];

    if (count%2 === 1) {
      result = arr[i];
      break;
    }
  }
  return result;
}

let a = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];
console.log( numberIn(a) );

a = [1,1,2,-2,5,2,4,4,-1,-2,5];
console.log( numberIn(a) );
