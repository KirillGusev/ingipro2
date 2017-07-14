/**
 * Дана строка, состоящая из букв A-Z:
 * "AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB"
 * Нужно написать функцию RLE, которая на выходе даст строку вида:
 * "A4B3C2XYZD4E3F3A6B28"
 * И сгенерирует любую ошибку, если на вход пришла невалидная строка.
 *
 * Пояснение:
 * 1. если символ встречается 1 раз, он остается без изменений
 * 2. если символ повторяется более 1 раза, к нему добавляется количество повторений
 */
str="AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB";
function rle(str) {
  var buff = "";
  var count = 0;
  var result = "";

  for (var i=0; i <= str.length; i++)
  {
    if (str[i] == buff)
      count++;
    else
      switch (count) {
        case 0:
          buff = str[i];
          count++;
          break;
        case 1:
          result += buff;
          buff = str[i];
          break;
        default:
          result += buff + count;
          buff = str[i];
          count = 1;
      }
  }
  return result;
}
console.log("A4B3C2XYZD4E3F3A6B28");
console.log(rle(str));



