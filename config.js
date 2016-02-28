'use strict';

const ip = require('ip');
const pkg = require('./package.json');

module.exports = {
  version: pkg.version,
  debug: process.env.NODE_ENV !== 'prod',
  port: process.env.PORT || 9009,
  db: {
    db: process.env.DB_NAME || 'db_qingloo',
    username: process.env.DB_USER || 'qingloo',
    password: process.env.DB_PASS || 'root123',
    // Supported: 'mysql', 'sqlite', 'postgres', 'mariadb'
    dialect: 'postgres',
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 5432,
    pool: {
      max: 10,
      min: 0,
      idle: 30000
    },
    logging: console.log
  },
  env: {
    title: '轻楼 - 小而美的贴吧',
    description: '轻楼 - 小而美的贴吧',
    staticRoot: process.env.STATIC || 'http://' + ip.address() + ':8000'
  },
  mail: {
    enable: true,
    from: '系统管理员 <admin@qingloo.com>',
    host: 'smtp.qingloo.com',
    port: 465,
    secure: true,
    auth: {
      user: 'admin@qingloo.com',
      pass: 'admin'
    }
  }
};
