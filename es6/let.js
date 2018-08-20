// 1. 没有变量提升 var 定义时，变量可以提升
/*
console.log(a);
let a = 4;
// a is not defined
*/

// 2. 不能重复申明
/* let a = 4;
let a = 5;
console.log(a);
// Identifier 'a' has already been declared
*/

// 3. 临时失效区（暂时性死区）
/*
var a = 5;
function fn(){
console.log(a);
let a = 4;
}
fn();
// a is not defined
*/

/* 具有块级作用域（由花括号包裹的区域）
// 来看一个例子
var a = 5;

function foo() {
  console.log(a); // undefined
  if (false) {
    var a = 6;
  }
}
foo();
*/

/*
// 这显然不是我们想要的结果，因为 js在es6之前没有块级作用域
for (let i = 0; i < 3; i++) {
  console.log(i);
}
console.log(i);
// 0 1 2 'i is not defined'
*/

/*
{
  let a = 10;
}
console.log(a);
// a is not defined
*/