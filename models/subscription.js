'use strict';

const util = require('../lib/util');

module.exports = function(sequelize, DataTypes) {

	var columns = {
		id: 	{ 
      		type: DataTypes.BIGINT.UNSIGNED,
      		primaryKey: true,
      		autoIncrement: true
    	},
        subUser:         {
            type: DataTypes.INTEGER,
            references: {
                model : 'user',
                key : 'id',
                // deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        subGroup:  {
            type: DataTypes.INTEGER,
            references: {
                model : 'group',
                key : 'id',
                // deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },

        comment: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '加入理由'
        },
        rejectReason:{
            type: DataTypes.STRING,
            allowNull: true,
            comment: '拒绝理由'
        },
        isValid:{
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue:false,
            comment:'是否被通过'
        }
	};

	var Subscription = sequelize.define('Subscription', columns, {

		paranoid 	: true,
		tableName 	: 'subscription'
	})
    
    return Subscription;
}