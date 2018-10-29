module.exports = function sumOfOther(array) {
  var sumArray = 0;
  for(var i = 0; i < array.length; i++) {
    sumArray += array[i];
  }
  
  for(var i = 0; i < array.length; i++) {
    array[i] = sumArray - array[i];
  }
  return array;
}