'use strict';

const util = require('../lib/util');

module.exports = function(sequelize, DataTypes) {

	var columns = {
        path :         {
            type: DataTypes.STRING,
            allowNull: false,
        },
       
    	description: 	{
    		type: DataTypes.STRING,
    		allowNull:true,
    		defaultValue: null
    	}
    	
	};

	var File = sequelize.define('File', columns, {

		paranoid 	: true,
		tableName 	: 'file'
	})
    
    return File;
}