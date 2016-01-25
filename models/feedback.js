'use strict';

const util = require('../lib/util');

module.exports = function(sequelize, DataTypes) {

	var columns = {
    	content: 			{
    		type: DataTypes.STRING,
    		allowNull: false,

    	},
    	
    	contact:  		{
    		type: DataTypes.STRING,
    		
    	},
        

	};

	var Feedback = sequelize.define('Feedback', columns, {

		paranoid 	: true,
		tableName 	: 'feedback',
        comment     : '反馈表'
	})
    
    return Feedback;
}