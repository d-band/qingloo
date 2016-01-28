'use strict';

module.exports = function(sequelize, types) {
  return sequelize.define('Comment', {
    content: {
      type: types.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'comment',
    comment: '评论表，不可对主题楼组评论，只可以对回复评论，与贴吧一致'
  });
};
