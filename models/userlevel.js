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
    	minCredit: 	{
    		type: DataTypes.STRING,
    		allowNull:false,
            comment: "最小积分",
    	},
    	maxCredit:  		{
    		type: DataTypes.INTEGER,
    		comment: "最大积分",
    		allowNull: false
    	}
	};

	var UserLevel = sequelize.define('UserLevel', columns, {

		paranoid 	: true,
		tableName 	: 'userlevel'
	})

    return UserLevel;
}