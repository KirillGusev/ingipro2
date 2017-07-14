//Нужно написать функцию, которая возвращает массив с числами
//из переданных массивов без дубликатов

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 5, 6, 7];
function f( arr1, arr2) {
    var result=[];

    function addNew(arr) {
        next:
            for( var i = 0 ; i < arr.length ; i++ ) {
                var value = arr[i];
                for ( j=0 ; j < result.length; j++) {
                    if ( value == result[j]) continue next;
                }
                result[result.length] = value;
            }
    }

    addNew(arr1)
    addNew(arr2);
    return result;
}

f(arr1, arr2);
