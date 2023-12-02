const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    hash: {
        type: String
    }
}, { versionKey: false, timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;