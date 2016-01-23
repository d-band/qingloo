'use strict';

const util = require('../lib/util');

module.exports = function(sequelize, DataTypes) {

	var columns = {
		id: 	{ 
      		type: DataTypes.INTEGER.UNSIGNED,
      		primaryKey: true,
      		autoIncrement: true
    	},
    	name: 			{
    		type: DataTypes.STRING,
    		allowNull: false,

    	},
    	description: 			{
    		type: DataTypes.STRING,
    		allowNull: false,

    	},


	};

	var InvitationCodeType = sequelize.define('InvitationCodeType', columns, {

		timestamps 	: true,
		paranoid 	: true,
		tableName 	: 'invitationcodetype',
        comment     : '邀请码类别表'
	})
    
    return InvitationCodeType;
}