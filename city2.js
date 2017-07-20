/**
 * Created by Интеграл on 20.07.2017.
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
      tempMax.temp = cities[index].main.temp;
    }
  })

  if (tempMax.name === cities[0].name) {
    alert(`В городе ${tempMax.name} теплее, чем в 5 ближайших городах`);
  } else {
    alert(`В городе ${tempMax.name} температура ${tempMax.temp}C.
Это на ${(tempMax.temp - cities[0].main.temp).toFixed(2)}С теплее, чем в ${cities[0].name}`);
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
    alert('Не смог найти информации о ближних городах. ' + error.message);
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
    alert(`Не смог найти информации о апрашиваемом городе - ${city}. ` + error.message);
  });
}


getCityParameters('New York', 5);