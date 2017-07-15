//Напишите функцию, которая в данном интерфейсе возвращает
//одно случайное число через случайный промежуток времени

'use strict';

function randomNumber() {
  const min = 0;
  const max = 10000;

  let rand1 = Math.floor(min + Math.random() * (max + 1 - min));
  const rand2 = Math.floor(min + Math.random() * (max + 1 - min + 10000));

  console.log(rand1, rand2);
  while(1) {
    rand1++;
    if ( rand1 === rand2 )
      return Math.floor(min + Math.random() * (max + 1 - min));
  }
  return -1;

}

console.log(randomNumber());