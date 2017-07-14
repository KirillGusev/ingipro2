//Напишите функцию, которая в данном интерфейсе возвращает
//одно случайное число через случайный промежуток времени
function randomNumber() {
    var test=0;
    var min = 0, max = 10000;
    var a, b;
    var rand1 = Math.floor(min + Math.random() * (max + 1 - min));
    var rand2 = Math.floor(min + Math.random() * (max + 1 - min + 10000));
    console.log(rand1, rand2);
    while(1) {
        rand1++;
        if ( rand1 == rand2 )
            return Math.floor(min + Math.random() * (max + 1 - min));
    }
    return "ошибка, вышли из цикла - непонятно как";

}

console.log(randomNumber());