/*
 Теплее ли в ближайшем городе?
 Как в 1ой задаче предложить пользователю ввести название города.
 Сделать запрос к ручке получения текущей погоды в этом городе (http://openweathermap.org/current#name).
 Из ответа узнать координаты его города. Сделать запрос к ручке http://openweathermap.org/current#cycle, и узнать
 погоду в 5 ближайших городах.
 Найти город с максимальной температурой. Вывести сообщение.
 Например, пользователь ввел Moscow.
 Покажем ему сообщение:
 "В городе Ryazanovo температура 21C. Это на 2С теплее, чем в Moscow". - Если температура выше, чем в городе пользователя
 "В городе Moscow теплее, чем в 5 ближайших городах". - Если в найденных городах температура ниже, чем в городе пользователя
 http://api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=10
 */
'use strict';

function findTempMax(cities) {
  const tempMax = {
    name: cities[0].name,
    temp: cities[0].main.temp
  };

  cities.forEach( (name, index) => {
    if (cities[index].main.temp > tempMax.temp) {
      tempMax.name = cities[index].name;

      alert(`В городе ${cities[index].name} температура ${tempMax.temp}C. 
Это на ${(cities[index].main.temp - cities[0].main.temp).toFixed(2)}С теплее, чем в ${cities[0].name}`);
    }
    }
  )

  if (tempMax.name === cities[0].name) {
    alert(`В городе ${tempMax.name} теплее, чем в 5 ближайших городах`);
  }

  return tempMax;
}

function getCitiesTempMax({lon, lat, name, temp}, numberOfNeighbor) {
  fetch(`http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=${numberOfNeighbor + 1}&units=metric&appid=bd5e378503939ddaee76f12ad7a97608`)
  .then( response => response.json() )
  .then( json => {
    findTempMax(json.list);
  })
  .catch( error => {
    alert('Не смог найти информацию о ближних городах. ' + error.message);
  });
}

function getCityParameters(city, numberOfNeighbor) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=bd5e378503939ddaee76f12ad7a97608`)
  .then( response => response.json() )
  .then( json => {
    const city = {
      lon: json.coord.lon,
      lat: json.coord.lat,
      name: json.name,
      temp: json.main.temp
    };

    getCitiesTempMax(city, numberOfNeighbor);
  })
  .catch( error => {
    alert(`Не смог найти информацию о запрашиваемом городе - ${city}. ` + error.message);
  });
}

getCityParameters(prompt('Введите город', 'London'), 5);