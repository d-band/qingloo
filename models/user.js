'use strict';

const util = require('../lib/util');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    id:   { 
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true
      },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: '用户名',
      unique: true,
    },
    pass: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: '密码',
    },
    salt: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: '盐',
    },
    nickname: {
      type: DataTypes.STRING(50),
      comment: '昵称',
    },
    avator: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '头像',
            // references : {
            //     model: 'image',
            //     key: 'id',
            //     // deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            // }
    }, 
    email: {
      type: DataTypes.STRING(50),
      comment: '邮箱',
    },
    credit: {
      type: DataTypes.INTEGER,
      comment: '积分',
      allowNull: false,
      defaultValue: 0
    },
    secureQuestion: {
      type: DataTypes.STRING(50),
      comment: "安全问题",
      allowNull: true,
      defaultValue: null
    },
    secureAnswer: {
      type: DataTypes.STRING,
      comment: '安全问题答案',
      allowNull: true,
    },
    verified:{
      type: DataTypes.BOOLEAN,
      comment: '加V'
    }
  }, 

  {
    tableName: 'user',
    comment: '用户表',
    paranoid: true,
    classMethods: {
      // read
      auth: function*(username, password) {
        let user = yield this.findOne({
          where: {
            name: username
          }
        });

        if (!user) return null;

        let hash = util.encrypt(password, user.salt);
        if (user.pass === hash) {
          user.pass = null;
          user.salt = null;
          return user;
        }
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
          where: {
            name: username
          }
        });
      }
    }
  });
};