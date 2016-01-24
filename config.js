'use strict';

const ip = require('ip');
const pkg = require('./package.json');

module.exports = {
  version: pkg.version,
  debug: process.env.NODE_ENV !== 'prod',
  port: 9009,
  db: {
    db: 'db_qingloo',
    username: 'qingloo',
    password: 'root123',
    // Supported: 'mysql', 'sqlite', 'postgres', 'mariadb'
    dialect: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    pool: {
      max: 10,
      min: 0,
      idle: 30000
    },
    logging: !!process.env.SQL_DEBUG,
  },
  env: {
    title: '轻楼 - 有良心的贴吧',
    description: '轻楼 - 有良心的贴吧',
    staticRoot: 'http://' + ip.address() + ':8000'
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