/**
 * Created by Интеграл on 17.07.2017.
 */
/**Написать функцию reverseString, которая будет возвращать реверсированную строку
function reverseString(str) {
  // your code
} */
'use strict';

function reverseString(str) {
  let result = "";

  if (!str) {
    return null;
  }

  for (let i = 0; i < str.length; i++) {
    result += str[str.length - 1 - i];
  }

  return result;
}

//второй вариант

function reverseString2(str) {
  let arr = [];
  let result = "";

  if (!str) {
    return null;
  }

  result = str.split('').reverse().join('');

  return result;
}