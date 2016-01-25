'use strict';

const util = require('../lib/util');

module.exports = function(sequelize, DataTypes) {

	var columns = {
		type: 	{ 
      		type: DataTypes.INTEGER,
    	},
    	ip: 			{
    		type: DataTypes.STRING,
    		allowNull: false,

    	},
        description:  {
            type: DataTypes.STRING,
            allowNull: true,
        }
      
	};

	var Log = sequelize.define('Log', columns, {

		paranoid 	: true,
		tableName 	: 'log'
	})
    
    return Log;
}