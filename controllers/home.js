'use strict';

exports.main = function *() {
  yield this.render('index');
};

exports.auth = function *() {
  let data = this.request.body;
  let user = yield this.orm().User.auth(data.username, data.password);
  if (user) {
    this.session.user = user;
    this.redirect('/');
  } else {
    this.flash('error', '用户名或密码错误');
    this.redirect('/login');
  }
};

exports.isAuth = function *(next) {
  if (this.session.user) {
    yield next;
  } else {
    this.redirect('/login');
  }
};

exports.register = function *() {
  let data = this.request.body;
  this.body = yield this.orm().User.register(data.name, data.password);
};

exports.forgot = function *() {

};
