'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Invitation', {
    code: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    used: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    validFrom: {
      type: DataTypes.DATE,
      allowNull: false
    },
    validThrough: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'invitation',
    comment: '邀请码,只用来邀请成员加入本贴吧'
  });
};