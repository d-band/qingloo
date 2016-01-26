'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Report', {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '分类，在代码中指定'
    },
    reason: {
      type: DataTypes.STRING,
      allowNull: false
    },
    againstId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '被举报的ID，可以是 topic，reply，和comment，不可以举报会员'
    }
  }, {
    tableName: 'report',
    comment: '举报'
  });
};