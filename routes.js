'use strict';

const home = require('./controllers/home');
const user = require('./controllers/user');
const group = require('./controllers/group');
const category = require('./controllers/category');

module.exports = function routes(router) {
  router.get('/', home.main);
  router.get('/category', category.all);
  router.get('/group/:id', group.main);
  // User
  router.post('/user/login', user.login);
  router.post('/user/register', user.register);
  router.post('/user/forgot"', user.forgot);
};
