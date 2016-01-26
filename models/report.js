'use strict';

const util = require('../lib/util');

module.exports = function(sequelize, DataTypes) {

	var columns = {
    	type: 			{
    		type: DataTypes.STRING,
    		allowNull: false,
    		comment : '分类，在代码中指定'

    	},
    	reason: {
            type: DataTypes.STRING,
            allowNull: false
    	}, 
        type: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        againstId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: '被举报的ID，可以是 topic，reply，和comment，不可以举报会员'
        }
      
	};

	var Report = sequelize.define('Report', columns, {

		paranoid 	: true,
		tableName 	: 'report',
		comment		: '举报'
	})
    
    return Report;
}