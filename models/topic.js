'use strict';

const util = require('../lib/util');

module.exports = function(sequelize, DataTypes) {

	var columns = {
		id: 	{ 
      		type: DataTypes.BIGINT.UNSIGNED,
      		primaryKey: true,
      		autoIncrement: true
    	},
    	content: 			{
    		type: DataTypes.STRING,
    		allowNull: false,

    	},
        author:         {
            type: DataTypes.INTEGER,
            references: {
                model : 'user',
                key : 'id',
                // deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        group:  {
            type: DataTypes.INTEGER,
            references: {
                model : 'group',
                key : 'id',
                // deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        flags:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
	};

	var Topic = sequelize.define('Topic', columns, {

		paranoid 	: true,
		tableName 	: 'topic'
	})
    
    return Topic;
}