/**
Напишите код, который сделает из массива объект
на входе массив
 var arr = [
 {name: 'width', value: 10},
 {name: 'height', value: 20}
 ];
  на выходе объект {width: 10, height: 20}
 */

var mass = [
    {name: 'width', value: 10},
    {name: 'height', value: 20}
];

function transform(arr)
{
    var object = {};
    var key;

    for (key in arr)
    {
        object[arr[key].name] = arr[key].value;
    }
    return object;
}

var a;
a = transform(mass);
alert(a.width);
alert(a.height);


