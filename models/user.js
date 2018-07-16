const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    items: [
        {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Item"
            },
            title: {
                type: String,
                required: true
            },
            note: String,
            purchased: Boolean
        }
    ]
});

//userSchema.plugin(passportLocalMongoose);

const User = module.exports = mongoose.model('User', userSchema);

// module.exports.findById = (id, callback) => {
//     User.findById(id, callback);
// }

module.exports.getUserById = (id, callback) => {
    User.findById(id, callback);
}

module.exports.findByUsername = function (username, callback) {
    const query = { username: username }
    User.findOne(query, callback);
}

module.exports.addUser = function (newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) {
                console.log(err);
            } else {
                newUser.password = hash;
                newUser.save(callback);
            }
        });
    });
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}

module.exports = User;

