'use strict';

module.exports = function(sequelize, types) {
  return sequelize.define('Member', {
    level: {
      type: types.INTEGER,
      allowNull: false,
      comment: '成员等级：1-吧主、2-小吧主、3-普通成员'
    }
  }, {
    tableName: 'member',
    comment: '贴吧成员'
  });
};
