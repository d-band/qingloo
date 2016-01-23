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
    	
    	contact:  		{
    		type: DataTypes.STRING,
    		
    	},
        

	};

	var Feedback = sequelize.define('Feedback', columns, {

		timestamps 	: true,
		paranoid 	: true,
		tableName 	: 'feedback',
        comment     : '反馈表'
	})
    
    return Feedback;
}