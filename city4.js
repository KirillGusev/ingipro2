/*
 Решить вторую задачу, используя async/await
 */

'use strict';

async function findTempMax(centralCityName, NumberCities) {
  try {
    const cities = await getCitiesTempMax(centralCityName, NumberCities);

    const tempMax = {
      name: cities[0].name,
      temp: cities[0].main.temp
    };

    cities.forEach( (name, index) => {
      if (cities[index].main.temp > tempMax.temp) {
        tempMax.name = cities[index].name;
        alert(`В городе ${tempMax.name} температура ${tempMax.temp}C.
Это на ${(tempMax.temp - cities[0].main.temp).toFixed(2)}С теплее, чем в ${cities[0].name}`);
      }
    })

    if (tempMax.name === cities[0].name) {
      alert(`В городе ${tempMax.name} теплее, чем в 5 ближайших городах`);
    }

  } catch (e) {
    alert('Error: ' + e.message);
  }
}

async function getCitiesTempMax(centralCityName, NumberCities) {
  try {
    const city = await getCityParameters(centralCityName);

    return await fetch(`http://api.openweathermap.org/data/2.5/find?lat=${city.lat}&lon=${city.lon}&cnt=${NumberCities + 1}&units=metric&appid=bd5e378503939ddaee76f12ad7a97608`)
    .then( response => response.json() )
    .then( json => json.list );

  } catch (e) {
    alert('Fetch error for the nearest cities: ' + e.message);
  }
}

function getCityParameters(centralCityName) {
  try {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${centralCityName}&units=metric&appid=bd5e378503939ddaee76f12ad7a97608`)
    .then( response => response.json() )
    .then( json => ({
      lon: json.coord.lon,
      lat: json.coord.lat,
      name: json.name,
      temp: json.main.temp
    }));

  } catch (e) {
    alert('Fetch error for central city: ' + e.message);
  }
}
const string = prompt('Введите город', 'London')
findTempMax(string, 5);