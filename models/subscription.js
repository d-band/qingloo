'use strict';

const util = require('../lib/util');

module.exports = function(sequelize, DataTypes) {


	var Subscription = sequelize.define('Subscription', {}, {

		paranoid 	: true,
		tableName 	: 'subscription'
        comment     : '订阅表（关注)'
	})
    
    return Subscription;
}