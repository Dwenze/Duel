var express = require('express');
var router = express.Router();
var jwt = require('jwt-simple');
//+ app

router.get('/duel', function(req, res, next) {
    res.render('../views/duel.html');
    //+ TODO: duel.hbs
});

module.exports = router;