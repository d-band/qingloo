'use strict';

const util = require('../lib/util');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: '用户名',
    },
    pass_hash: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: '密码',
    },
    pass_salt: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: '盐',
    },
    nickname: {
      type: DataTypes.STRING(50),
      comment: '昵称',
    },
    email: {
      type: DataTypes.STRING(50),
      comment: '邮箱',
    },
  }, {
    tableName: 'user',
    comment: '用户表',
    classMethods: {
      // read
      auth: function*(username, password) {
        let user = yield this.findOne({
          where: {
            username: username
          }
        });

        if (!user) return null;

        let hash = util.encrypt(password, user.pass_salt);
        if (user.pass_hash === hash) {
          user.pass_hash = null;
          user.pass_salt = null;
          return user;
        }
      },
      add: function*(username, password) {
        let salt = util.makeSalt();
        let row = this.build({
          username: username,
          pass_salt: salt,
          pass_hash: util.encrypt(password, salt)
        });

        return yield row.save();
      },
      changepwd: function*(username, newpwd) {
        let salt = util.makeSalt();
        return yield this.update({
          pass_salt: salt,
          pass_hash: util.encrypt(newpwd, salt)
        }, {
          where: {
            username: username
          }
        });
      }
    }
  });
};