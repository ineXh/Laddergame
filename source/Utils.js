window.getRandomRange = function(min, max) {
  return Math.random() * (max - min) + min;
}
window.getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function swap(json){
  var ret = {};
  for(var key in json){
    ret[json[key]] = key;
  }
  return ret;
}
var spliceOne = function(arr, index) {
  var len=arr.length;
  if (!len) { return }
  while (index<len) {
    arr[index] = arr[index+1]; index++ }
  arr.length--;
};