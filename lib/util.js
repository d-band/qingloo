'use strict';

const crypto = require('crypto');
const emailRegx = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
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

// 验证邮箱
exports.isEmail = function(str, skipEmpty) {
  if (!str && skipEmpty) return true;
  return emailRegx.test(str);
};

// 验证名字
exports.isName = function(str) {
  return /^[a-zA-Z0-9_]+$/.test(str || '');
};
