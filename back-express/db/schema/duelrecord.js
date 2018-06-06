var mongoose = require('../db');
var Schema = mongoose.Schema;

var duelrecordSchema = new Schema({
	user1: String,
	title1: String,
	user2: String,
	title2: String,
	record: [{
		move1: Number,
		move2: Number,
	}],
	date: {
        type: Date, default: Date.now
    },
});

module.exports = mongoose.model('duelrecord', duelrecordSchema);