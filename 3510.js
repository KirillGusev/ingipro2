//Нужно написать функцию, которая возвращает массив с числами
//из переданных массивов без дубликатов

'use strict';

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 5, 6, 7];

function f(arr1, arr2) {
  let obj = {};

  for (let i = 0; i < arr1.length; i++) {
    let str = arr1[i];
    obj[str] = true;
  }

  for (let i = 0; i < arr2.length; i++) {
    let str = arr2[i];
    obj[str] = true;
  }

  return Object.keys(obj);
}

alert( f(arr1, arr2) );
