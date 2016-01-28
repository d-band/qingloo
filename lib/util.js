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
