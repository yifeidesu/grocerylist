// const User = require('../models/user');
// const router = require('express').Router();
// const passport = require('passport');
// const jwt = require('jsonwebtoken');
// const configDB = require('../config/db');

// router.get("/", function (req, res, next) {
//     res.send("users index");
// });

// router.post('/register', (req, res, next) => {
//     const newUser = new User({
//         username: req.body.username,
//         password: req.body.password
//     });

//     User.addUser(newUser, (err, user) => {
//         if (err) {
//             res.json({ success: false, msg: 'Failed to register user' });
//         } else {
//             res.json({ success: true, msg: 'User registered' });
//         }
//     });
// });

// router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
//     res.send('PROFILE');
//     //res.json({ user: req.user });
// });

// router.post('/authenticate', (req, res, next) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     User.findByUsername(username, (err, user) => {
//         if (err) throw err;
//         if (!user) {
//             return res.json({ success: false, msg: 'User not found' });
//         }

//         User.comparePassword(password, user.password, (err, isMatch) => {
//             if (err) throw err;
//             if (isMatch) {
//                 const token = jwt.sign({ data: user }, configDB.secret, {
//                     expiresIn: 604800
//                 });

//                 res.json({
//                     success: true,
//                     token: 'JWT ' + token,
//                     user: {
//                         id: user._id,
//                         username: user.username,
//                         password: user.password
//                     }
//                 });
//             } else {
//                 return res.json({
//                     success: false, msg: 'Wrong password'
//                 });
//             }
//         });
//     });

// });


// module.exports = router;
