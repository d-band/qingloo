'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Reply', {
    // 基本信息
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    floor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '楼层'
    },
    // 统计信息
    commentCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '回复数'
    }
  }, {
    tableName: 'reply',
    comment: '评论表'
  });
};