'use strict';

const util = require('../lib/util');

module.exports = function(sequelize, DataTypes) {

	var columns = {
		id: 	{ 
      		type: DataTypes.INTEGER.UNSIGNED,
      		primaryKey: true,
      		autoIncrement: true
    	},
    	content: 			{
    		type: DataTypes.STRING,
    		allowNull: false,

    	},
    	
    	author:  		{
    		type: DataTypes.INTEGER,
    		references: {
                model : 'user',
                key : 'id',
                // deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
    	},
        reply:         {
            type: DataTypes.INTEGER,
            references: {
                model : 'reply',
                key : 'id',
                // deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },

	};

	var Comment = sequelize.define('Comment', columns, {

		timestamps 	: true,
		paranoid 	: true,
		tableName 	: 'comment',
        comment     : '评论表，不可对主题楼组评论，只可以对回复评论，与贴吧一致'
	})
    
    return Comment;
}