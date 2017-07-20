/*
 Показать пользователю погоду в нескольких городах
 Пользователь вводит через запятую названия городов.
 Нужно получить для этих городов погоду из ручки http://openweathermap.org/current#name.
 И вывести пользователю информацию о погоде в этих городах
 Например, пользователь ввел: Moscow, New-York, London.
 Покажем ему сообщение:
 "Moscow: температура 21C, скорость ветра 4.1, влажность 80%,
 New-York: температура 26C, скорость ветра 7.1, влажность 70%,
 London: температура 19C, скорость ветра 1.1, влажность 90%"
 */

'use strict';

function getCitiesParameters(cities) {
  const arrCities = cities.split(', ');
  Promise.all( arrCities.map( name => fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=bd5e378503939ddaee76f12ad7a97608`)
  .then( response => response.json() )))
  .then( arrJson => {
    let result = ``;

    for (let city of arrJson) {
      result += `${city.name}: температура ${city.main.temp}С, влажность: ${city.main.humidity}%, cкорость ветра: ${city.wind.speed}\n`;
    }

    alert(result);
  })
  .catch( error => {
    alert(`Не смог найти информацию о запрашиваемом городе - ${city}. ` + error.message);
  });
}

getCitiesParameters(prompt('Введите город', 'London'));