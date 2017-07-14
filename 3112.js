//3112
//Написать функцию, удаляющую элемент из массива по индексу
var arr = [1, 2, 3, 4, 5];

function drop(arr, i) {
  var arrCopy;
  arrCopy = arr.slice();
  arrCopy.splice(i,1);
  return arrCopy;
}

drop(arr, 3); // [1, 2, 3, 5]