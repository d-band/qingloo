'use strict';

const util = require('../lib/util');

module.exports = function(sequelize, DataTypes) {

	var columns = {
    	code: 			{
    		type: DataTypes.STRING,
    		allowNull: false,

    	},
    	
    	used:  		{
    		type: DataTypes.BOOLEAN,
    		allowNull: false,
            defaultValue: false
    	},
        validFrom: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        validThrough: {
            type: DataTypes.DATE,
            allowNull: false,
        }

	};

	var InvitationCode = sequelize.define('InvitationCode', columns, {

		paranoid 	: true,
		tableName 	: 'invitationcode',
        comment     : '邀请码,只用来邀请成员加入本贴吧'
	})
    
    return InvitationCode;
}