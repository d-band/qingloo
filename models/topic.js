'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Topic', {
    // 基本信息
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: '标题'
    },
    content: {
      type: DataTypes.TEXT,
      comment: '内容'
    },
    flag: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '帖子类型：4-置顶、3-热门、2-精华、1-推荐、0-普通'
    },
    // 统计信息
    viewCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '浏览数'
    },
    replyCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '评论数'
    }
  }, {
    tableName: 'topic',
    comment: '帖子'
  });
};