'use strict';

const util = require('../lib/util');

module.exports = function(sequelize, DataTypes) {

	var columns = {
    	content: 			{
    		type: DataTypes.STRING,
    		allowNull: false,

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