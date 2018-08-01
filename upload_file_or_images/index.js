'use strict';

/*
 * 利用fileReader对象上传图片或文件
 * input 标签change事件上注册调用该事件
 * 上传到后台的数据为 base64 编码的code
 * input上事件绑定方法：<input @change="uploadPhoto($event)" type="file" class="kyc-passin">
 */

function uploadPhoto(e) {
  // 利用fileReader对象获取file
  var file = e.target.files[0];
  var filesize = file.size;
  var filename = file.name;
  // 2,621,440   2M
  if (filesize > 2101440) {
    // 图片大于2MB

  }
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function (e) {

    // 读取到的图片base64 数据编码 将此编码字符串传给后台即可
    var imgcode = e.target.result;
    console.log(imgcode);
    // 调用ajax 发送data:imgcode 到后台
  }
}