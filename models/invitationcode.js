'use strict';

const util = require('../lib/util');

module.exports = function(sequelize, DataTypes) {

	var columns = {
		id: 	{ 
      		type: DataTypes.INTEGER.UNSIGNED,
      		primaryKey: true,
      		autoIncrement: true
    	},
    	code: 			{
    		type: DataTypes.STRING,
    		allowNull: false,

    	},
    	
    	used:  		{
    		type: DataTypes.BOOLEAN,
    		allowNull: false,
            defaultValue: false
    	},
        group:         {
            type: DataTypes.INTEGER,
            references: {
                model : 'group',
                key : 'id',
                // deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
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

		timestamps 	: true,
		paranoid 	: true,
		tableName 	: 'invitationcode',
        comment     : '邀请码'
	})
    
    return InvitationCode;
}