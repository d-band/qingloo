'use strict';

const util = require('../lib/util');

module.exports = function(sequelize, DataTypes) {

	var columns = {
		id: 	{ 
      		type: DataTypes.BIGINT.UNSIGNED,
      		primaryKey: true,
      		autoIncrement: true
    	},
    	ip: 			{
    		type: DataTypes.STRING,
    		allowNull: false,

    	},
        author:         {
            type: DataTypes.INTEGER,
            comment: '操作者',
            references: {
                model : 'user',
                key : 'id',
                // deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        action : {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: '操作类型',
            references : {
                model: 'action',
                key: 'id',
                // deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        }, 
      
	};

	var Log = sequelize.define('Log', columns, {

		paranoid 	: true,
		tableName 	: 'log'
	})
    
    return Log;
}