var secret = require('./secret');
var express = require('express');
var router = express.Router();
var jwt = require('jwt-simple');
var mongoose = require('mongoose');
//+ api
var db = mongoose.createConnection(secret.db_address);
db.on('error', (error)=> {
    console.log(error);
});
db.once('open', function (callback) {
    console.log('yay!');
})

var duelSchema = mongoose.Schema({
    username : String,
    password : String,
});

duelSchema.methods.findByUsername = function (callback) {
    return this.model('Duel').find({username: this.username}, callback);
}

var duelModel = mongoose.model('Duel', duelSchema);


router.post('/', function(req, res, next) { //test
    res.json({msg:Math.random() * 10});
});

router.post('/login', function(req, res, next) {
    var decoded = jwt.decode(req.body.jwtString, secret.jwt_secret);
    console.log(decoded);
    if (decoded.username == "un" && decoded.password == "pw") {
        res.json({msg: "Login succeed."});
    }
    else {
        res.json({msg: "Login failed."});
    }
});

module.exports = router;
