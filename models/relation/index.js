'use strict';

module.exports = function(m) {
  // 每个用户可以加入多个贴吧
  m.User.belongsToMany(m.Group, {
    as: 'Groups',
    through: m.Member,
    foreignKey: 'userId'
  });

  // 每个贴吧有多个成员
  m.Group.belongsToMany(m.User, {
    as: 'Members',
    through: m.Member,
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

  //上传文件外键
  m.File.belongsTo(m.User, {
    foreignKey: 'userId'
  })

  //邀请码外键
  m.InvitationCode.belongsTo(m.Group, {
    foreignKey: 'groupId'
  })

  //日志外键
  m.Log.belongsTo(m.User, {
    foreignKey: 'userId'
  })

  //站内信外键
  m.Message.belongsTo(m.User, {
    foreignKey: 'authorId'
  })
  m.Message.belongsTo(m.User, {
    foreignKey: 'receiptId'
  })

  //举报外键
  m.Report.belongsTo(m.User, {
    foreignKey: 'userId'
  })
  //订阅（关注)外键
  m.Subscription.belongsTo(m.User, {
    foreignKey: 'userId'
  })
  m.Subscription.belongsTo(m.Group,{
    foreignKey: 'groupId'
  })

};