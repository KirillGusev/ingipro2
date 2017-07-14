/*
 Написать функцию, принимающую на вход произвольную строку и длину строки, и возвращающую
 исходную строку, в которую вставлены символы перевода строки ('\n') в нужных местах, так,
 чтобы ни одна подстрока не превышала заданную длину. По возможности нужно перносить по границам слов. Например:

 wrap("мама мыла раму", 11); // "мама мыла\nраму"
 wrap("экскурсия", 4); // экск\nурси\nя  */

var str = "мама мыла раму";
var str1 = "экскурсия";
function wrap(str, distance)
{

    var buff = "";
    var buff1 = "";
    var result = "";
    var count = 0;
    for (var i=0; i<str.length; i++)
    {
        if (str[i] != " ")
            buff = buff + str[i];
        else
        {
            if (buff1)
                buff1 = buff1 + " " + buff;
            else
                buff1 = buff1 + buff;
            buff = "";
        }
        count++;
        if (count == distance)
        {
            if (buff1)
            {
                result = result + buff1 + '\\n';
                buff1="";
                count = buff.length;
            }
            else
            {
                result = result + buff + '\\n';
                buff = "";
                count = 0;
            }
        }
    }
    if (buff) result = result + buff;
    return result;
}

//console.log(wrap(str,11));
//console.log(wrap(str1,4));