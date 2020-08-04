const FacebookStategy = require('passport-facebook').Strategy;
const User = require('../models/user')
module.exports = function (app, passport) {
    passport.use(new FacebookStategy({
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_API_SECRET,
        callbackURL: "http://www.example.com/auth/facebook/callback",
        profileFields: ['id', 'displayName', 'photos', 'email']
    },
        function (accesToken, refreshToken, profile, done) {
        done(null, profile)
        }
    ));
    return passport
}
