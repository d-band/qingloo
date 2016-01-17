'use strict';

const fs = require('fs');
const join = require('path').join;
const extend = require('util')._extend;
const Sequelize = require('sequelize');
const cfg = require('./config').db;


cfg.define = {
  timestamps: true,
  charset: 'utf8',
  collate: 'utf8_general_ci'
};

let sequelize = new Sequelize(cfg.db, cfg.username, cfg.password, cfg);

let models = {};
let path = join(__dirname, 'models');
// Bootstrap models
fs.readdirSync(path).forEach(function(file) {
  if (~file.indexOf('.js')) {
    let model = sequelize.import(join(path, file));
    models[model.name] = model;
  }
});

// 启动时同步一次
sequelize.sync();

module.exports = extend({
  sequelize: sequelize,
  Sequelize: Sequelize,
  query: function*(sql, args) {
    let options = {
      replacements: args
    };
    let data = yield this.sequelize.query(sql, options);
    if (/select /i.test(sql)) {
      return data[0];
    }
    return data[1];
  },
  queryOne: function*(sql, args) {
    let rows = yield * this.query(sql, args);
    return rows && rows[0];
  }
}, models);