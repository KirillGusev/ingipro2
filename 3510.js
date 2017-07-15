//Нужно написать функцию, которая возвращает массив с числами
//из переданных массивов без дубликатов

'use strict';

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 5, 6, 7];

function f(arr1, arr2) {
  const arr3 = arr1.concat(arr2);
  const obj = {};

  arr3.forEach((value) => obj[value] = true );

  return Object.keys(obj);
}

alert( f(arr1, arr2) );
