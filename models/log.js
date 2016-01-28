'use strict';

module.exports = function(sequelize, types) {
  return sequelize.define('Log', {
    ip: {
      type: types.STRING(40),
      allowNull: false
    },
    type: {
      type: types.INTEGER
    },
    description: {
      type: types.STRING(255)
    }
  }, {
    tableName: 'log'
  });
};
