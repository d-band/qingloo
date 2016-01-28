'use strict';

module.exports = function(sequelize, types) {
  return sequelize.define('UserLevel', {
    name: {
      type: types.STRING,
      allowNull: false
    },
    minCredit: {
      type: types.STRING,
      allowNull: false,
      comment: '最小积分'
    },
    maxCredit: {
      type: types.INTEGER,
      comment: '最大积分',
      allowNull: false
    }
  }, {
    tableName: 'userlevel'
  });
};
