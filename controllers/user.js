'use strict';

const User = require('../db').User;

exports.login = function *() {
  let data = this.request.body;
  let user = yield User.auth(data.username, data.password);

  this.assert(user, 400, '用户名或密码错误!');

  this.session.user = user;
  this.body = { code: 0 };
};

exports.register = function *() {
  let data = this.request.body;
  let isReg = yield User.findByName(data.name);

  this.assert(isReg, 400, '用户名已注册!');

  let user = yield User.add(data);
  this.session.user = user;
  this.body = { code: 0 };
};

exports.forgot = function *() {

};
