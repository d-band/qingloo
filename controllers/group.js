'use strict';

const Group = require('../db').Group;

exports.main = function *() {
  yield this.render('group');
};

// REST
exports.hotGroup = function *() {
  this.body = yield Group.getHot();
};
