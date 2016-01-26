'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Message', {
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fromSystem: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    tableName: 'message',
    comment: '站内信'
  });
};