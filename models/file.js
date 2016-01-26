'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('File', {
    path: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    }
  }, {
    tableName: 'file'
  });
};