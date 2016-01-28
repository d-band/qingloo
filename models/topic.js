'use strict';

module.exports = function(sequelize, types) {
  return sequelize.define('Topic', {
    // 基本信息
    title: {
      type: types.STRING(255),
      allowNull: false,
      comment: '标题'
    },
    content: {
      type: types.TEXT,
      comment: '内容'
    },
    flag: {
      type: types.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '帖子类型：4-置顶、3-热门、2-精华、1-推荐、0-普通'
    },
    // 统计信息
    viewCount: {
      type: types.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '浏览数'
    },
    replyCount: {
      type: types.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '评论数'
    }
  }, {
    tableName: 'topic',
    comment: '帖子'
  });
};
