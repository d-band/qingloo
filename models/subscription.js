'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Subscription', {
    comment: {
      type: DataTypes.STRING(255),
      comment: '备注'
    }
  }, {
    tableName: 'subscription',
    comment: '订阅表（关注)'
  });
};