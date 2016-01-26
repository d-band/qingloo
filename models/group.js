'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Group', {
    // 基本信息
    name: {
      type: DataTypes.STRING(60),
      allowNull: false,
      comment: '贴吧名称'
    },
    avatar: {
      type: DataTypes.STRING(100),
      comment: '贴吧头像'
    },
    cover: {
      type: DataTypes.STRING(100),
      comment: '背景图片'
    },
    description: {
      type: DataTypes.TEXT,
      comment: '描述'
    },
    // 统计信息
    focusCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '关注数'
    },
    topicCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '帖子数'
    }
  }, {
    tableName: 'group',
    comment: '贴吧'
  });
};