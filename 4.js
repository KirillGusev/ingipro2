/*
 Написать функцию, которая возвращает сумму указанных чисел и всех чисел между ними. Шаг равен 1.
 Первое число необязательно наименьшее
 function sumAll(arr) {
 // your code
 }
 sumAll([1, 4]); // 10 (1+2+3+4)
 sumAll([10, 5]) // 45 (10+9+8+7+6+5) */
'use strict';

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function sumAll(arr) {
  let result = 0;

  if (!isNumber(arr[0]) || !isNumber(arr[1])) {
    return -1;
  }

  if (arr[0] > arr[1]) {
    let a = arr[0];
    arr[0] = arr[1];
    arr[1] = a;
  }

  for (let i = arr[0]; i <= arr[1]; i++) {
    result += i;
  }

  return result;
}

sumAll([1, 4]); // 10 (1+2+3+4)
sumAll([10, 5]); // 45 (10+9+8+7+6+5)
