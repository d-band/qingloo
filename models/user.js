'use strict';

const util = require('../lib/util');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: '用户名',
      unique: true
    },
    pass: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: '密码'
    },
    salt: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: '盐'
    },
    nickname: {
      type: DataTypes.STRING(50),
      comment: '昵称'
    },
    avatar: {
      type: DataTypes.STRING(100),
      comment: '头像'
    },
    email: {
      type: DataTypes.STRING(50),
      comment: '邮箱'
    },
    credit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '积分'
    },
    secureQuestion: {
      type: DataTypes.STRING(50),
      comment: '安全问题'
    },
    secureAnswer: {
      type: DataTypes.STRING,
      comment: '安全问题答案'
    },
    verified: {
      type: DataTypes.BOOLEAN,
      comment: '加V'
    }
  }, {
    tableName: 'user',
    comment: '用户表',
    classMethods: {
      auth: function*(username, password) {
        let user = yield this.findOne({
          where: { name: username }
        });

        if (!user) return null;

        let hash = util.encrypt(password, user.salt);
        if (user.pass === hash) {
          user.pass = null;
          user.salt = null;
          return user;
        }
        return null;
      },
      add: function*(username, password) {
        let salt = util.makeSalt();
        let row = this.build({
          name: username,
          salt: salt,
          pass: util.encrypt(password, salt)
        });

        return yield row.save();
      },
      changepwd: function*(username, newpwd) {
        let salt = util.makeSalt();
        return yield this.update({
          salt: salt,
          pass: util.encrypt(newpwd, salt)
        }, {
          where: { name: username }
        });
      }
    }
  });
};