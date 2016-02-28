'use strict';

const join = require('path').join;
const koa = require('koa');
const view = require('koa-view');
const bodyParser = require('koa-bodyparser');
const session = require('koa-generic-session');
const logger = require('koa-logger');
const statik = require('koa-static');
const favicon = require('koa-favicon');
const csrf = require('koa-csrf');
const router = require('koa-router')();

const orm = require('./orm');
const config = require('./config');
const routes = require('./routes');

const flash = require('./lib/flash');
const locals = require('./lib/locals');
const error = require('./lib/error');

const app = koa();

app.use(bodyParser());
app.use(logger());

/** Set public path, for css/js/images **/
app.use(statik(join(__dirname, '/public'), {
  maxage: config.debug ? 0 : 60 * 60 * 24 * 7
}));
app.use(favicon(join(__dirname, '/public/favicon.ico')));

/** Sessions **/
app.keys = ['eEp2JHpJoI8T6Rn3'];
app.use(session({
  key: 'sid'
}, app));

/** View **/
app.use(view('views', {
  noCache: config.debug
}));

/** ORM **/
app.use(orm.middleware);

/** Error **/
error(app);

/** CSRF */
app.use(csrf());

/** Libs **/
flash(app);
locals(app);

/** Router **/
routes(router);
app.use(router.routes());
app.use(router.allowedMethods());

/** Start **/
if (!module.parent) {
  let port = config.port || 3000;
  app.listen(port);
  console.log('Running site at: http://127.0.0.1:' + config.port);
}

module.exports = app;
