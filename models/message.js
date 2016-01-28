'use strict';

module.exports = function(sequelize, types) {
  return sequelize.define('Message', {
    content: {
      type: types.TEXT,
      allowNull: false
    },
    fromSystem: {
      type: types.BOOLEAN,
      defaultValue: false
    }
  }, {
    tableName: 'message',
    comment: '站内信'
  });
};
