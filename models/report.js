'use strict';

const util = require('../lib/util');

module.exports = function(sequelize, DataTypes) {

	var columns = {
		id: 	{ 
      		type: DataTypes.BIGINT.UNSIGNED,
      		primaryKey: true,
      		autoIncrement: true
    	},
    	type: 			{
    		type: DataTypes.STRING,
    		allowNull: false,
    		comment : '分类，在代码中指定'

    	},
    	reason: {
            type: DataTypes.STRING,
            allowNull: false
    	}, 
        author:         {
            type: DataTypes.INTEGER,
            comment: '发送者',
            references: {
                model : 'user',
                key : 'id',
                // deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        comment: {
 			type: DataTypes.INTEGER,
    		allowNull:true,
            references: {
                model : 'comment',
                key : 'id',
                // deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        }, 
        reply:         {
            type: DataTypes.INTEGER,
    		allowNull:true,
            references: {
                model : 'reply',
                key : 'id',
                // deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
    	topic: 	{
    		type: DataTypes.BIGINT,
    		allowNull:true,
            references:{
                model: 'topic',
                key: 'id',
                // deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
    	},
      
	};

	var Message = sequelize.define('Message', columns, {

		paranoid 	: true,
		tableName 	: 'message',
		comment		: '举报'
	})
    
    return Message;
}