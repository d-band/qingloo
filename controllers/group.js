'use strict';

exports.main = function *() {
  yield this.render('group');
};

// REST
exports.popGroups = function *() {
  this.body = yield this.orm().Group.getPopular();
};
