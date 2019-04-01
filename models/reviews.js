const mongoose = require('mongoose');

let reviewsSchema = new mongoose.Schema({
    albumTitle: {
        type: String,
        required: true,
        minlength: 1
    },
    albumArtist: {
        type: String,
        required: true,
        minlength: 1
    },
    genre: {
        type: String,
        required: true,
        minlength: 1
    },
    writer: {
        type: String,
        required: true,
        minlength: 1
    }
});

let Review = mongoose.model('reviews', reviewsSchema);

module.exports = { Review };
