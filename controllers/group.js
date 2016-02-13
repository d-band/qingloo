'use strict';

const Group = require('../db').Group;

exports.main = function *() {
  yield this.render('group');
};

// REST
exports.popGroups = function *() {
  this.body = yield Group.getPopular();
};
