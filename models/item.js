const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/db');

const ItemSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    note: {
        type: String
    },
    purchased: {
        type:Boolean,
        default: false
    }
});

const Item = module.exports = mongoose.model('Item', ItemSchema);

// INDEX
module.exports.findAll = (callback) => {
    Item.find({}, callback);
}

// CREATE
module.exports.addItem = (newItem, callback) => {
    Item.create(newItem, callback);
}

// DESTROY
module.exports.deleteById= (id, callback) => {
    Item.findByIdAndRemove(id, callback);
}

module.exports.getItemById = (id, callback) => {
    Item.findById(id, callback);
}

module.exports.findByItemname = function (Itemname, callback) {
    const query = { Itemname: Itemname }
    Item.findOne(query, callback);
}

module.exports.addItem = function (newItem, callback) {

    Item.create(newItem, callback);
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}

module.exports = Item;

