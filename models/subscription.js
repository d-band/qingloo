'use strict';

module.exports = function(sequelize, types) {
  return sequelize.define('Subscription', {
    comment: {
      type: types.STRING(255),
      comment: '备注'
    }
  }, {
    tableName: 'subscription',
    comment: '订阅表（关注)'
  });
};
