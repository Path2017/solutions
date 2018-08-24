;
(function (global, undefined) {
  var plugin = {
    add: function (n1, n2) {
      return n1 + n2
    }
  }

  // 最后将插件对象暴露给全局对象
  global.plugin = plugin;
})(window);

/*
对上面的代码段传参问题进行解释一下：

1.在定义插件之前添加一个分号， 可以解决js合并时可能会产生的错误问题；
2.undefined在老一辈的浏览器是不被支持的， 直接使用会报错， js框架要考虑到兼容性， 因此增加一个形参undefined， 就算有人把外面的 undefined 定义了， 里面的 undefined 依然不受影响；
3.把window对象作为参数传入， 是避免了函数执行的时候到外部去查找。
*/
