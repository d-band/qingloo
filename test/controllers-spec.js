'use strict';

const assert = require('assert');
const app = require('../app');
const request = require('supertest').agent(app.listen());

describe('controllers/user', function() {
  var csrf;
  it('should GET /home ok', function(done) {
    request
      .get('/')
      .expect(200)
      .expect(/J_loginForm/)
      .expect(/J_registerForm/)
      .end(function(err, res) {
        if (err) return done(err);
        csrf = res.text.match(/<meta name=\"_csrf\" content=\"(.*)\">/)[1];
        done();
      });
  });

  it('should POST /user/login username not null', function(done) {
    request
      .post('/user/login')
      .send({
        _csrf: csrf,
        password: 'test'
      })
      .expect(400)
      .expect(/用户名不能为空/, done);
  });

  it('should POST /user/login password not null', function(done) {
    request
      .post('/user/login')
      .send({
        _csrf: csrf,
        username: 'test'
      })
      .expect(400)
      .expect(/密码不能为空/, done);
  });

  it('should POST /user/login username or password wrong', function(done) {
    request
      .post('/user/login')
      .send({
        _csrf: csrf,
        username: 'test',
        password: 'test'
      })
      .expect(400)
      .expect(/用户名或密码错误/, done);
  });
});