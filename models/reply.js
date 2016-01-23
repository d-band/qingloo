'use strict';

const util = require('../lib/util');

module.exports = function(sequelize, DataTypes) {

	var columns = {
		id: 	{ 
      		type: DataTypes.INTEGER(10).UNSIGNED,
      		primaryKey: true,
      		autoIncrement: true
    	},
    	content: 			{
    		type: DataTypes.STRING,
    		allowNull: false,

    	},
    	topic: 	{
    		type: DataTypes.BIGINT,
    		allowNull:false,
            references:{
                model: 'topic',
                key: 'id',
                // deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
    	},
        author:         {
            type: DataTypes.INTEGER,
            references: {
                model : 'user',
                key : 'id',
                // deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        floor: {
            type: DataTypes.INTEGER,
            comment: '楼层',
            allowNull: true,
        }, 
	};

	var Reply = sequelize.define('Reply', columns, {

		timestamps 	: true,
		paranoid 	: true,
		tableName 	: 'reply',
        comment     : '回复表'
	})
    
    return Reply;
}