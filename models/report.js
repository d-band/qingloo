'use strict';

module.exports = function(sequelize, types) {
  return sequelize.define('Report', {
    type: {
      type: types.STRING(50),
      allowNull: false,
      comment: '分类，在代码中指定'
    },
    reason: {
      type: types.STRING(400),
      allowNull: false
    },
    againstId: {
      type: types.INTEGER,
      allowNull: false,
      comment: '被举报的ID，可以是 topic，reply，和comment，不可以举报会员'
    }
  }, {
    tableName: 'report',
    comment: '举报'
  });
};
