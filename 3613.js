/**
 Мы описали пользователя mike и всех его друзей в формате JSON:
 var mike = {
 friends: {
 name: 'Anna',
 avatar: {
 url: 'http://some/url/to/avatar'
 }
 }
 }
 Вам необходимо получить аватар первого другаmike.
 Если друзей нет или они не загрузили своё фото,
 то нужно вернуть'http://default/url/to/avatar'
 */

'use strict';

function getAvatarUrl(obj, path){
  let arr = path.split(', ');
  let index = 0;
  let length = arr.length;
  while (obj !== null && index < length) {
    obj = obj[arr[index++]];
  }
  return (index && index === length) ? obj : "http://default/url/to/avatar";

}
let mike = {
  friends: [{
    name: 'Anna',
    avatar: {
      url: 'http://some/url/to/avatar'
    }
  }]
};
console.log(getAvatarUrl(mike, "friends, 0, avatar, url"));
