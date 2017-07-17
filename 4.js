/*
Написать функцию, которая возвращает сумму указанных чисел и всех чисел между ними. Шаг равен 1.
Первое число необязательно наименьшее
function sumAll(arr) {
  // your code
}
sumAll([1, 4]); // 10 (1+2+3+4)
sumAll([10, 5]) // 45 (10+9+8+7+6+5) */
'use strict';

function sumAll(arr) {
let result = 0;
let low;
let higher;
if (!(typeof arr[0] === "number") || !(typeof arr[1] === "number"))
  return -1;

if (arr[0] > arr[1]) {
  low = arr[1];
  higher = arr[0];
} else {
  low = arr[0];
  higher = arr[1];
}

for (let i = low; i <= higher; i++) {
  result += i;
}

return result;
}
sumAll([1, 4]); // 10 (1+2+3+4)
sumAll([10, 5]) // 45 (10+9+8+7+6+5)