var mongoose = require('../db');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	username: String,
	password: String,
	win: {
		type: Number,
		default: 0
	},
	lose: {
		type: Number,
		default: 0
	},
	point: {
		type: Number,
		default: 0
	}
});

module.exports = mongoose.model('dueluser', userSchema);