'use strict';

const home = require('./controllers/home');

module.exports = function routes(router) {
  router.get('/', home.main);
};