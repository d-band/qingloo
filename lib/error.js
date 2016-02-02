'use strict';

const config = require('../config');

module.exports = function(app) {
  app.use(function *(next) {
    try {
      yield next;
      if (404 === this.response.status && !this.response.body) this.throw(404);
    } catch (err) {
      this.status = err.status || 500;
      // application
      this.app.emit('error', err, this);

      switch (this.accepts('html', 'text', 'json')) {
        case 'text':
          this.type = 'text/plain';
          this.body = err.status ? err.message : 'Internal server error';
          break;
        case 'json':
          this.type = 'application/json';
          this.body = {
            code: err.status || 500,
            msg: err.status ? err.message : 'Internal server error'
          };
          break;
        case 'html':
          yield this.render('error', {
            env: config.env,
            status: err.status || 500,
            message: err.status ? err.message : 'Internal server error'
          });
          break;
      }
    }
  });
};
