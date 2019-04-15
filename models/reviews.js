const mongoose = require('mongoose');
require('mongoose-double')(mongoose);

let SchemaTypes = mongoose.Schema.Types;
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
    },
    review: {
        type: String,
        required: true,
        minlength: 1
    },
    grade: {
        type: SchemaTypes.Double,
        required: true
    }
});

let Review = mongoose.model('reviews', reviewsSchema);

module.exports = { Review };
