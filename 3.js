/*Написать функцию, котоая разбивает переданный массив arr на группы длиной size.
 function chunkArrayInGroups(arr, size) {
 // your code
 }
 chunkArrayInGroups(["a", "b", "c", "d"], 2); // [["a", "b"], ["c", "d"]]*/

'use strict';

function chunkArrayInGroups(arr, size) {
  let result = [];
  let buff = [];
  let j = 0;

  if (!(size > 0)) {
    return -1;
  }

  const remnant = arr.length % size;
 
  for (let i = 0; i < arr.length; i += size, j++) {
    buff = arr.slice(i, i+size);
    result[j] = buff;
  }

  return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // [["a", "b"], ["c", "d"]]
