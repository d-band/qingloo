'use strict';

const util = require('../lib/util');

module.exports = function(sequelize, DataTypes) {

	var columns = {
		id: 	{ 
      		type: DataTypes.INTEGER(10).UNSIGNED,
      		primaryKey: true,
      		autoIncrement: true
    	},
    	name: 			{
    		type: DataTypes.STRING,
    		allowNull: false,

    	},
    	description: 	{
    		type: DataTypes.STRING,
    		allowNull:true,
    		defaultValue: null
    	},
    	credit:  		{
    		type: DataTypes.INTEGER,
    		comment: "加分的动作为正，减分动作为负，其他为0",
    		defaultValue: 0,
    		allowNull: false
    	}
	};

	var Action = sequelize.define('Action', columns, {

		paranoid 	: true,
		tableName 	: 'action'
	})

    return Action;
}