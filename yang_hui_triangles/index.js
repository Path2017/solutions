// param: max 行数
function triangles(max) {
  var arr = [1];
  var result = [];
  var n = 0;
  for (; n < max; n++) {
    var currentArr = arr;
    result.push(currentArr);
    var list = [];
    arr.push(0);
    for (var i = 0; i < arr.length; i++) {
      if ((i - 1) < 0) {
        list.push(0 + arr[i]);
      } else {
        list.push(arr[i - 1] + arr[i]);
      }
    }
    arr = list;
  }
  for (var i = 0; i < result.length; i++) {
    result[i].pop();
  }
  return result;
}
var result = triangles(10);
console.dir(result);