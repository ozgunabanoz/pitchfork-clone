const mongoose = require('mongoose');

let newsSchema = new mongoose.Schema({
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
    writer: {
        type: String,
        required: true,
        minlength: 1
    },
    article: {
        type: String,
        required: true,
        minlength: 1
    }
});

let News = mongoose.model('news', newsSchema);

module.exports = { News };
