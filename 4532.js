/**
 Написать функцию truncate(str, count), которая будет обрезать строку по словам.

 var str = 'Мама мыла раму';
 truncate(str, 7); // 'Мама...'
 truncate(str, 11); // 'Мама мыла...'*/

'use strict';

let str = 'Мама мыла раму';

function truncate (str, size) {
  let arr = str.split(' ');
  let newStr = arr[0];

  for(let i = 1; i < arr.length; i++){
    if( (newStr.length + arr[i].length + 1) > len){
      return newStr;
    }
    else newStr += ' ' + arr[i];
  }
  if (newStr.length !== size) {
    newStr += "...";
  }
  return newStr;
}
console.log( truncate(str, 7) );
console.log( truncate(str, 11) );
