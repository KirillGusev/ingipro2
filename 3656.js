/**
 Задача на знание особенностей JS, внимание к изначальным условиям и умение писать рекурсивные функции.

 Написать функцию глубокого копирования значений, полученных в результате JSON.parse();

 var val = JSON.parse(str);
 function deepCopy(val) {
    // ...
}*/

'use strict';

let mike = {
  friends: {
    name: 'Anna',
    avatar: {
      url: 'http://some/url/to/avatar'
    }
  }
};

function deepCopy(val) {
  let copy = {};
  for (let key in val) {
    if (typeof copy[key] === "object")
      copy[key] = deepCopy( val[key] );
    else
      copy[key] = val[key];
  }

  return copy;
}

let test;

test = deepCopy[mike];