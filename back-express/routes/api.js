let secret = require('./secret');
let express = require('express');
let router = express.Router();
let jwt = require('jwt-simple');
let dbWorker = require('../db/dbWorker');
let Cache = {};
router.post('/*', function(req, res, next) { //test
    console.log(req.body);
    //res.json({msg:Math.random() * 10});
    next();
});

router.post('/login', function(req, res, next) {
    dbWorker.findUser(req.body,
        (ans) => {
            console.log(ans);
            switch (ans.code) {
                case 0:
                    let preload = {
                      username: req.body.username,
                      exp: new Date().getTime() + 10*1000,
                    }
                    let token = jwt.encode(preload, secret.jwt_secret);
                    res.json({code: 0, data: token, msg: "Login succeed."});
                    break;
                case 1:
                    res.json({code: 1, msg: ans.err});
                    break;
            }
        });
    // if (req.body.username == "un" && req.body.password == "pw") {
    // }
    // else {
    // }
});

router.post('/register', function(req, res, next) {
    let decoded = jwt.decode(req.body.jwtString, secret.jwt_secret);
    if (decoded.username == "un" && decoded.password == "pw") {
        res.json({code: 0, msg: "Register succeed."});
    }
    else {
        res.json({code: 1, msg: "Register failed."});
    }
});

router.post('/app/duel/*', function(req, res, next) {
    next();
})

router.post('/app/duel/startwait', function(req, res, next) {
    
})
module.exports = router;
