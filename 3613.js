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
 Если друзей нет или они не загрузили своё фото, то нужно вернуть'http://default/url/to/avatar'
 */

var mike = {
    friends: [{
        name: 'Anna',
        avatar: {
            url: 'http://some/url/to/avatar'
        }

    }]
}
function getAvatar(obj){
    if(typeof(obj) == "underfined" || typeof(obj.friends) == "underfined" || typeof(obj.friends.avatar) == "underfined")
        return "http:'http://default/url/to/avatar'";
    return mike.friends[0].avatar.url
}

alert( getAvatar(mike));
 //P.S.  думаю, что я так до конца задания и не понял
