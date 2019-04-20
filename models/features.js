const mongoose = require('mongoose');

let featuresSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1
    },
    headline: {
        type: String,
        required: true,
        minlength: 1
    },
    article: {
        type: String,
        required: true,
        minlength: 1
    },
    writer: {
        type: String,
        required: true,
        minlength: 1
    },
    url: {
        type: String,
        required: true,
        minlength: 1
    }
});

let Features = mongoose.model('features', featuresSchema);

module.exports = { Features };
