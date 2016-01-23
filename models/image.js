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
    		allowNull: true,

    	},
        path :         {
            type: DataTypes.STRING,
            allowNull: false,
        },
        owner:         {
            type: DataTypes.INTEGER,
            references: {
                model : 'user',
                key : 'id',
                // deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            },
            comment:'上传者'
        },
    	description: 	{
    		type: DataTypes.STRING,
    		allowNull:true,
    		defaultValue: null
    	}
    	
	};

	var Image = sequelize.define('Image', columns, {

		paranoid 	: true,
		tableName 	: 'image'
	})
    
    return Image;
}