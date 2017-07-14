/**
Написать функцию truncate(str, count), которая будет обрезать строку по словам.

    var str = 'Мама мыла раму';
truncate(str, 7); // 'Мама...'
truncate(str, 11); // 'Мама мыла...'*/

var str = 'Мама мыла раму';
function truncate (str, size) {
    var count, buff = "" , result = "";

    for (var i = 0; i < size; i++ )
    {
        if (str[i+1] == " ")
        {
            result+= buff + str[i];
            buff = "";
        }
        else
            buff += str[i];
    }
    result += "..."

    return result;
}
console.log(truncate(str, 7));
console.log(truncate(str, 11));
