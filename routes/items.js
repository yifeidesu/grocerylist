const Item = require('../models/item');
const User = require('../models/user');
const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const configDB = require('../config/db');

// Index all items
router.get("/", function (req, res, next) {

    // User.findById(req.user._id, (err, user) => {
    //     if(err) throw err;
    //     console.log(JSON.stringify(user));
    //     res.json(user.items);
        
    // });
    //const userId = req.user._id;
    
    
    Item.findAll((err, items) => {
        if (err) throw err
        res.json(items);
    });
});

// SHOW
router.get('/:id', (req, res) => {
    Item.findById(req.params.id, (err, item) => {
        if (err) throw err;
        res.json(item);
    });
});

// EDIT - show edit forms, a client side route
router.get('/:id/edit', (req, res) => {

});

// UPDATE
router.put('/:id', (req, res) => {

    Item.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        note: req.body.note,
        purchased: req.body.purchased
    }, (err, item) => {
        if (err) throw err;
        if (item) {
            res.json({ success: true, msg: "Item updated successfully." });
        } else {
            res.json({ success: false, msg: "Item update failed." });
        }
    });
});

// CREATE an item
router.post('/', (req, res, next) => {

    const newItem = {
        title: req.body.title,
        note: req.body.note,
    };

    Item.addItem(newItem, function (err, newItem) {
        if (err) throw err;
        res.json(newItem);
    });
});

// DESTROY
router.delete('/:id', (req, res) => {

    Item.deleteById(req.params.id, (err, item) => {
        if (err) throw err;
        if (item) {
            res.json({ success: true, msg: "Item removed successfully: " + item });
        } else {
            res.json({ success: false, msg: "Failed to remove item." });
        }
    });
});

// // Delete an item
// router.post('/authenticate', (req, res, next) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     Item.findByUsername(username, (err, user) => {
//         if (err) throw err;
//         if (!user) {
//             return res.json({ success: false, msg: 'User not found' });
//         }

//         Item.comparePassword(password, user.password, (err, isMatch) => {
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
//                         email: user.email
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


module.exports = router;
