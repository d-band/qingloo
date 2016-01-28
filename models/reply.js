'use strict';

module.exports = function(sequelize, types) {
  return sequelize.define('Reply', {
    // 基本信息
    content: {
      type: types.TEXT,
      allowNull: false
    },
    floor: {
      type: types.INTEGER,
      allowNull: false,
      comment: '楼层'
    },
    // 统计信息
    commentCount: {
      type: types.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '回复数'
    }
  }, {
    tableName: 'reply',
    comment: '评论表'
  });
};
