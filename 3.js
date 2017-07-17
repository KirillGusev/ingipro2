/**
 * Created by Интеграл on 17.07.2017.
 */
/**
 Написать функцию, котоая разбивает переданный массив arr на группы длиной size.
 function chunkArrayInGroups(arr, size) {
  // your code
}
 chunkArrayInGroups(["a", "b", "c", "d"], 2); // [["a", "b"], ["c", "d"]]
 */
'use strict';

function chunkArrayInGroups(arr, size) {
  let result = [];
  let buff = [];

  if (arr.length % size !== 0){
    alert(`разбить на группы по ${size} не получится`);
    return -1;
  }

  function subArray(arr, index){
    let arr2=[];
    for (let i = 0;i < size; i++) {
      arr2[i] = arr[index+i];
    }
    return arr2;
  }

  for (let i = 0, j = 0; i< arr.length; i += size, j++) {
    buff = subArray(arr, i);
    result[j] = buff;
    console.log(buff);
  }
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); // [["a", "b"], ["c", "d"]]