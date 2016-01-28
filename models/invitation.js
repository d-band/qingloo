'use strict';

module.exports = function(sequelize, types) {
  return sequelize.define('Invitation', {
    code: {
      type: types.STRING(50),
      allowNull: false
    },
    used: {
      type: types.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    validFrom: {
      type: types.DATE,
      allowNull: false
    },
    validThrough: {
      type: types.DATE,
      allowNull: false
    }
  }, {
    tableName: 'invitation',
    comment: '邀请码,只用来邀请成员加入本贴吧'
  });
};
