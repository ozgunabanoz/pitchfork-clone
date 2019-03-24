const mongoose = require('mongoose');
const validator = require('validator');

let userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: 'Invalid email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    }
});

let User = mongoose.model('users', userSchema);

module.exports = { User };
