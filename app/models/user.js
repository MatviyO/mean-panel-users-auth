const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')

const userShema = new Schema({
    username: {type: String, lowercase: true, required: true, unique: true},
    password: {type: String, required: true, },
    email: {type: String, lowercase: true, required: true, unique: true},
});

userShema.pre('save' , function(next) {
    const user = this
    bcrypt.hash(user.password, null, null, function (err, hash) {
        if(err) {
            return next(err);
        }
        user.password = hash;
        next();
    });
});

module.exports = mongoose.model('User', userShema)
