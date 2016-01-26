'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Feedback', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    contact: {
      type: DataTypes.STRING(100)
    }
  }, {
    tableName: 'feedback',
    comment: '反馈表'
  });
};