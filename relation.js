'use strict';

module.exports = function(m) {
  // 每个用户可以加入多个贴吧
  m.User.belongsToMany(m.Group, {
    as: 'Groups',
    through: m.GroupMembers,
    foreignKey: 'userId'
  });

  // 每个贴吧有多个成员
  m.Group.belongsToMany(m.User, {
    as: 'Members',
    through: m.GroupMembers,
    foreignKey: 'groupId'
  });

  // 帖子外键 (groupId, userId)
  m.Topic.belongsTo(m.Group, {
    foreignKey: 'groupId'
  });
  m.Topic.belongsTo(m.User, {
    foreignKey: 'userId'
  });

  // 评论外键 (topicId, userId)
  m.Reply.belongsTo(m.Topic, {
    foreignKey: 'topicId'
  });
  m.Reply.belongsTo(m.User, {
    foreignKey: 'userId'
  });

  // 回复外键 (replyId, userId)
  m.Comment.belongsTo(m.Reply, {
    foreignKey: 'replyId'
  });
  m.Comment.belongsTo(m.User, {
    foreignKey: 'userId'
  });
};