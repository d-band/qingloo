'use strict';

const assert = require('assert');
const app = require('../app');
const request = require('supertest').agent(app.listen());

describe('controllers/user/login', function() {
  it('should GET /login ok', function(done) {
    request
      .get('/login')
      .expect(200)
      .expect(/username/)
      .expect(/Sign in/, done);
  });
});

describe('controllers/home', function() {
  it('should GET / ok', function(done) {
    request
      .post('/login')
      .send({
        username: 'test',
        password: 'test'
      })
      .expect(302)
      .end(function(err) {
        assert(err === null);
        request
          .get('/')
          .expect(200)
          .expect(/Hello/, done);
      });
  });
});

describe('controllers/user/logout', function() {
  it('should GET /logout ok', function(done) {
    request
      .get('/logout')
      .expect(302, done);
  });
});
