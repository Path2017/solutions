'use strict';

// 在使用split 分割字符串时 若字符串不为空 将可以正常分割
// 且不会报错
var list = '123&&23&&09';
var datalist = list.split('&&');
console.log(datalist.toLocaleString()); // 123,23,09

// 如果数据格式不对
var list2 = [];
var datalist2 = list2.split('&&');
console.log(datalist2.toLocaleString()); // 报错

// 可利用 try - catch 捕获错误避免这种问题
var list3 = [];
try {
  var datalist3 = list3.split('&&');
  console.log(datalist3.toLocaleString());
} catch (err) {
  console.log('传入数据不合法'); // 传入数据不合法
}