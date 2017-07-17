/**
 * Created by Интеграл on 17.07.2017.
 */
/**
 Написать функцию palindrome, которая будет возвращает true, если переданная строка является полиндромом, и false, если не является
 function palindrome(str) {
  // your code
}
 palindrome("eye"); // true
 palindrome("hello"); // false
 palindrome("А роза упала на лапу Азора"); // true
 */
'use strict';

function palindrome(str) {
  let count = 0;

  if (!str) {
    return null;
  }

  for (let i = 0; i < Math.floor(str.length/2); i++) {
    if (str[i].toLowerCase() === str[str.length -1 -i].toLowerCase()) {
      count++;
    }
  }

  return count ===  Math.floor(str.length/2);
}