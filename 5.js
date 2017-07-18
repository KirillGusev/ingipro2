/**
 * Created by Интеграл on 17.07.2017.
 */
/*Написать функцию, которая в переданной строке str меняет слово before на слово after и возвращает новую строку.
  Если слово before начиналось с заглавной буквы, вставленное вместо него слово after тоже должно начинаться с заглавной буквы
function myReplace(str, before, after) {
// your code
}
myReplace("Let us get back to more Coding", "Coding", "algorithms")
// "Let us get back to more Algorithms".
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
// "A quick brown fox leaped over the lazy dog"*/

'use strict';

function myReplace(str, before, after) {
  let result = "";
  let index = str.indexOf(before);

  if (index === -1) {
    return -1;
  }

  if (before[0].toUpperCase() === before[0]) {
    after = after[0].toUpperCase() + after.slice(1) ;
  } else {
    after = after[0].toLowerCase() + after.slice(1) ;
  }

  result = str.slice(0, index) + after + str.slice(index+before.length);

  return result;
}
myReplace("Let us get back to more Coding", "Coding", "algorithms");
// "Let us get back to more Algorithms".
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
// "A quick brown fox leaped over the lazy dog"