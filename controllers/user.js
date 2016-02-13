'use strict';

const User = require('../db').User;
const util = require('../lib/util');
const Subscription = require('../db').Subscription;
const Member = require('../db').Member;
const Group = require('../db').Group;

exports.login = function *() {
  let data = this.request.body;

  this.assert(data.username, 400, '用户名不能为空!');
  this.assert(data.password, 400, '密码不能为空!');

  let user = yield User.auth(data.username, data.password);

  this.assert(user, 400, '用户名或密码错误!');

  this.session.user = user;
  this.body = { code: 0 };
};

exports.register = function *() {
  let data = this.request.body;

  this.assert(data.username, 400, '用户名不能为空!');
  this.assert(data.password, 400, '密码不能为空!');
  this.assert(util.isName(data.username), 400, '用户名格式错误!');
  this.assert(data.password.length >= 6, 400, '密码长度必须大于 6!');
  this.assert(util.isEmail(data.email, true), 400, '邮箱格式错误!');

  let isReg = yield User.findByName(data.username);
  this.assert(!isReg, 400, '用户名已注册!');

  let user = yield User.add(data);
  this.session.user = user;
  this.body = { code: 0 };
};

exports.forgot = function *() {

};

exports.mySubscription = function *() {
  let numberPerPage = 20;
  let data = this.request.body;
  let page = data.page;
  if (!page) {
    page = 0;
  }

  let sub = yield Subscription.findAll({
    include: [User, Group],
    where: {
      userId: this.session.user.id
    },
    offset: page * numberPerPage,
    limit: numberPerPage
  });
  this.body = util.map(sub, ['Group']);
};

exports.myGroups = function *() {
  let numberPerPage = 20;
  let data = this.request.body;
  let page = data.page;
  if (!page) {
    page = 0;
  }

  let sub = yield Member.findAll({
    include: [User, Group],
    where: {
      userId: this.session.user.id
    },
    offset: page * numberPerPage,
    limit: numberPerPage
  });
  this.body = util.map(sub, ['Group']);
};
