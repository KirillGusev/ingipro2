/* Нужно написатьфункцию range() аналогичную тому что есть в python.
 Сигнатура
 range(stop)
 range(start, stop, [step=1])
 для упрощения start, stop, step - integer

 range(10) // => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 range(1, 11)  // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 range(0, 30, 5) // => [0, 5, 10, 15, 20, 25]
 range(0, 10, 3) // => [0, 3, 6, 9]
 range(0) // => [] */
function range() {
  var start, stop, step, i, j;
  var result = [];

  if (typeof(arguments[1]) == "undefined") {
    start = 0;
    stop = arguments[0];
  } else {
    start = arguments[0];
    stop = arguments[1];
  }

  if (typeof(arguments[2]) == "undefined")
    step = 1;
  else
    step = arguments[2];

  for (i = start, j = 0; i < stop; i += step, j++)
    result[j] = i;

  return result;

}
console.log( range(10) );
console.log( range(1, 11) );
console.log( range(0, 30, 5) );
console.log( range(0, 10, 3) );
console.log( range(0) );
