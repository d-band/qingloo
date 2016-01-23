'use strict';

const util = require('../lib/util');

module.exports = function(sequelize, DataTypes) {

	var columns = {
		id: 	{ 
      		type: DataTypes.BIGINT.UNSIGNED,
      		primaryKey: true,
      		autoIncrement: true
    	},
    	content: 			{
    		type: DataTypes.STRING,
    		allowNull: false,

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
        receipt:         {
            type: DataTypes.INTEGER,
            comment: '接受者',
            references: {
                model : 'user',
                key : 'id',
                // deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        fromSystem: {
            type : DataTypes.BOOLEAN,
            defaultValue: false,
        }, 
      
	};

	var Message = sequelize.define('Message', columns, {

		paranoid 	: true,
		tableName 	: 'message',
        comment     : '站内信'
	})
    
    return Message;
}