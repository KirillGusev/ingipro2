//Найти число, повторяющееся нечетное количество раз
//[20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5] // 5
//[1,1,2,-2,5,2,4,4,-1,-2,5] // -1

function numberIn(arr)
{
    //var value;
    var count, result;
    result = "нету искомых чисел";
    var processed=[];
    for (var i=0; i< arr.length; i++)
    {
        count = 0 ;
        //value = arr[i]
        if(processed.indexOf(arr[i]) != -1) continue;

        for (var j = 0; j < arr.length; j++)
            if (arr[i] == arr[j]) count++;
        processed[processed.length] = arr[i];
        if (count%2 == 1) {
            result = arr[i];
            break;
        }
//      console.log(arr[i]);
    }
    return result;
}
var a = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];
console.log(numberIn(a));
var a = [1,1,2,-2,5,2,4,4,-1,-2,5];
console.log(numberIn(a));
