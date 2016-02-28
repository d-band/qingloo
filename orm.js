'use strict';

const join = require('path').join;
const cfg = require('./config').db;

cfg.modelPath = join(__dirname, 'models');
cfg.define = {
  timestamps: true,
  charset: 'utf8',
  collate: 'utf8_general_ci'
};

const orm = require('koa-orm')(cfg);
const db = orm.database();

// 添加关联关系
require('./models/relation')(db);

// 启动时同步一次
db.sequelize.sync({
  force: false
});

module.exports = orm;
