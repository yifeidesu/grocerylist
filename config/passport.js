const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const configDB = require('./db');

module.exports = function (passport) {
    
    let opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt") ;
    opts.secretOrKey = configDB.secret;

    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        console.log('****'+JSON.stringify(jwt_payload));

        User.getUserById(jwt_payload.data._id, (err, user) => {

            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                //todo link to create new
            }
        });
    }));
}

