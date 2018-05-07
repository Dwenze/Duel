var express = require('express');
var router = express.Router();
var jwt = require('jwt-simple');
var mongoose = require('mongoose');
/* GET home page. */
var db = mongoose.connect('mongodb://duelroot:rootduel@104.192.83.172/duel');
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

router.post('/token', function(req, res, next) {
    var secret = Buffer.from('ae1a1915a379f3be5394b64d14794932', 'hex');
    var decoded = jwt.decode(req.body.jwtString, secret);
    console.log(decoded);
    if (decoded.password == "o") {
        res.json({msg: "OK"});
    }
    else {
        res.json({msg: "NO"});
    }
});

module.exports = router;
