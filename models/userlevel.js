'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserLevel', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    minCredit: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '最小积分'
    },
    maxCredit: {
      type: DataTypes.INTEGER,
      comment: '最大积分',
      allowNull: false
    }
  }, {
    tableName: 'userlevel'
  });
};