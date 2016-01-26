'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('File', {
    path: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255)
    }
  }, {
    tableName: 'file'
  });
};