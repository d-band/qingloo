'use strict';

const util = require('../lib/util');

module.exports = function(sequelize, DataTypes) {

	var columns = {
		id: 	{ 
      		type: DataTypes.BIGINT.UNSIGNED,
      		primaryKey: true,
      		autoIncrement: true
    	},
    	name: 			{
    		type: DataTypes.STRING,
    		allowNull: false,

    	},
        avator :         {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: '头像',
            references : {
                model: 'image',
                key: 'id',
                // deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        background : {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: '背景图片',
            references : {
                model: 'image',
                key: 'id',
                // deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        }, 
        level: {
            type: DataTypes.INTEGER,
            
        }, 
    	description: 	{
    		type: DataTypes.STRING,
    		allowNull:true,
    		defaultValue: null
    	}
    	
	};

	var Group = sequelize.define('Group', columns, {

		paranoid 	: true,
		tableName 	: 'group',
        comment     : '贴吧'
	})
    
    return Group;
}