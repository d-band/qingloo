'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Log', {
    ip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'log'
  });
};