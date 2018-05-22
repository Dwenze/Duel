let mongoose = require('./db.js');
//mongoose.Promise = global.Promise;
let User = require('./schema/user');


exports.addUser = function (data, callback) {
    let error = new Error();
    User.findOne({username: data.username, password: data.password})
        .exec()
        .then(doc => {
            if (doc === null) {
                error.msg = 'username_or_password_error';
                reject(error);
            }
            else {
                new User({
                    username: data.username,
                    password: data.password,
                }).save();
            }
        })
        .then(() => {
            callback({code: 0});
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