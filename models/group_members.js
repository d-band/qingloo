'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GroupMembers', {
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '成员等级：1-吧主、2-小吧主、3-普通成员'
    }
  }, {
    tableName: 'group_members',
    comment: '贴吧成员'
  });
};