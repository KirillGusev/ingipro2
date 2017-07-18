/**
 * Created by Интеграл on 18.07.2017.
 */
/*8
Напишите функцию getImage(url), которая возвращает промис, переходящий в состояние "resolved",
  если картинка успешно загрузилась и в "rejected" если при загрузке произошла ошибка.
  Эту функцию можно использовать так:*/
  function getImage(url) {
    return new Promise(function(resolve, reject) {
      let img = new Image();

      img.onload = function() {
        return resolve(url);
      };

      img.onerror = function() {
        return reject(url);
      };
      img.src = url;
    });
  }
}
getImage('http://bit.ly/2vntYlL').then(url => {
  alert(`${url} successfully loaded`);
}).catch(url => {
  alert(`Error loading ${url}`);
});
/*Немного теории:
  Про объект картинки можно почитать тут https://developer.mozilla.org/ru/docs/Web/API/HTMLImageElement/Image
  У объекта класса Image есть методы onload и onerror.
  onload вызывается, если картинка успешно загружена,
  onerror вызывается в случае ошики */