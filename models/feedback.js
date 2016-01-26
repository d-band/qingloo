'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Feedback', {
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact: {
      type: DataTypes.STRING
    }
  }, {
    tableName: 'feedback',
    comment: '反馈表'
  });
};