'use strict';

const config = require('../config');

module.exports = function(app) {
  app.use(function *(next) {
    this.state = this.state || {};
    this.state.env = config.env;
    this.state.ctx = this;
    this.state.user = this.session.user;
    this.state._csrf = this.csrf;

    yield next;
  });
};
