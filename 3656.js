/**
 Задача на знание особенностей JS, внимание к изначальным условиям и умение писать рекурсивные функции.

    Написать функцию глубокого копирования значений, полученных в результате JSON.parse();

var val = JSON.parse(str);
function deepCopy(val) {
    // ...
}*/

function deepCopy(val) {
    var copy;
    for (var key in val)
    {
        if (typeof(copy[key] = "object")
            copy[key] = deepCopy(val[key]);
        else
            copy[key] = val[key];
    }
    return copy;
}