// lib/index.js

var Generator = require('./create');

exports.yellOut = function() {

	console.log('Yo!');
	Generator.create();
};