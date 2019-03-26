const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

let userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 1,
        unique: true
    },
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
    },
    tokens: [
        {
            access: {
                type: String,
                required: true
            },

            token: {
                type: String,
                required: true
            }
        }
    ]
});

userSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();

    return _.pick(userObject, ['_id', 'username']);
};

userSchema.methods.generateToken = function() {
    let user = this;
    let access = 'auth';
    let token = jwt.sign({ _id: user._id.toString(), access }, process.env.JWT_SECRET).toString();

    user.tokens = user.tokens.concat([{ access, token }]);

    return user.save().then(() => {
        return token;
    });
};

userSchema.pre('save', function(next) {
    let user = this;

    if (user.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (error, password) => {
                user.password = password;
                next();
            });
        });
    } else {
        next();
    }
});

let User = mongoose.model('users', userSchema);

module.exports = { User };
