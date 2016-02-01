'use strict';

const crypto = require('crypto');

// 生成盐
exports.makeSalt = function() {
  return Math.round((new Date().valueOf() * Math.random())) + '';
};

// 密码加密
exports.encrypt = function(pass, salt) {
  if (!pass) return '';
  return crypto.createHmac('sha1', salt).update(pass).digest('hex');
};

// 注册和登录字段校验
exports.validate = function(name, pass) {
  return name && name.length < 6 && pass && pass.length < 7;
};
