'use strict';

module.exports = function(sequelize, types) {
  return sequelize.define('File', {
    path: {
      type: types.STRING(100),
      allowNull: false
    },
    description: {
      type: types.STRING(255)
    }
  }, {
    tableName: 'file'
  });
};
