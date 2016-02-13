'use strict';

module.exports = function(sequelize, types) {
  return sequelize.define('Group', {
    // 基本信息
    name: {
      type: types.STRING(60),
      allowNull: false,
      comment: '贴吧名称'
    },
    avatar: {
      type: types.STRING(100),
      comment: '贴吧头像'
    },
    cover: {
      type: types.STRING(100),
      comment: '背景图片'
    },
    description: {
      type: types.TEXT,
      comment: '描述'
    },
    // 统计信息
    focusCount: {
      type: types.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '关注数'
    },
    topicCount: {
      type: types.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '帖子数'
    }
  }, {
    tableName: 'group',
    comment: '贴吧',
    classMethods: {
      getPopular: function *() {
        return yield this.findAll({
          order: [['focusCount', 'DESC'], ['topicCount', 'DESC']],
          limit: 10
        });
      }
    }
  });
};
