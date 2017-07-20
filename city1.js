/*
 1) Показать пользователю информацию о погоде в его городе.
 Предложить пользователю ввести название города.
 Сделать запрос к ручке получения текущей погоды в этом городе (http://openweathermap.org/current#name).
 Если ответ получен, вывести пользователю температуру в цельсиях, продолжительность дня, скорость ветра.
 Если возникли ошибки, вывести сообщение об ошибке
 Полезные ссылки:
 Cписок всех доступных городов можно посмотреть тут http://bulk.openweathermap.org/sample/ - большой json.
 Можно просто английские названия городов использовать вроде (Moscow, London, New-York ...) - работают.
 Пример урла запроса 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=bd5e378503939ddaee76f12ad7a97608'
 */

'use strict';

function getCityParameters(city) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=bd5e378503939ddaee76f12ad7a97608`)
  .then( response => response.json() )
  .then( json => {
    function getLongInStr(dayLongInSec) {
      const hour = Math.floor(dayLongInSec / (60 * 60));
      const minute = Math.floor((dayLongInSec - hour * 60 * 60) / 60);
      const second = dayLongInSec - hour * 60 * 60 - minute * 60;

      return `${hour}:${minute}:${second}`;
    }

    const dayLongInSec = json.sys.sunset - json.sys.sunrise;
    const dayLongInStr = getLongInStr(dayLongInSec);
    alert(`Температура в Цельсиях: ${json.main.temp}\nПродолжительность дня: ${dayLongInStr}\nСкорость ветра: ${json.wind.speed}`);
  })
  .catch( error => {
    alert('Fetch error: ' + error.message);
  });
}

getCityParameters('Moscow');