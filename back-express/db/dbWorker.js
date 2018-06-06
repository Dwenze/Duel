let mongoose = require('./db.js');
//mongoose.Promise = global.Promise;
let User = require('./schema/user');
let Duelrecord = require('./schema/duelrecord');

exports.addUser = function (data, callback) {
    let error = new Error();
    User.findOne({username: data.username})
        .exec()
        .then(doc => {
            if (doc === null) {
                new User({
                    username: data.username,
                    password: data.password,
                }).save();
            }
            else {
                error.msg = 'username_exist';
                reject(error);
            }
        })
        .then(() => {
            callback({code: 0, data: data});
        })
        .catch(err => {
            callback({code: 1, err: err});
        });
}

exports.findUser = function (data, callback) {
    let error = new Error();
    User.findOne({username: data.username})
        .exec()
        .then(doc => {
            console.log(doc);
            if (doc === null) {
                callback({code: 1, err: 'username_does_not_exist'});
            }
            else {
                console.log(data);
                callback({code: 0, data: data});
            }
        })
        .catch(err => {
            callback({code: 2, err: err});
        });
}