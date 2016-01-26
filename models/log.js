'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Log', {
    ip: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING(255)
    }
  }, {
    tableName: 'log'
  });
};