'use strict';

module.exports = function(sequelize, types) {
  return sequelize.define('Feedback', {
    content: {
      type: types.TEXT,
      allowNull: false
    },
    contact: {
      type: types.STRING(100)
    }
  }, {
    tableName: 'feedback',
    comment: '反馈表'
  });
};
