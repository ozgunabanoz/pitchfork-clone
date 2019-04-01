const _ = require('lodash');

let { Review } = require('./../models/reviews');

module.exports = app => {
    // make the routes secured (requiring authentication)
    app.post('/api/reviews', async (req, res) => {
        try {
            let body = _.pick(req.body, ['albumTitle', 'albumArtist', 'genre', 'writer']);
            let review = new Review(body);

            await review.save();
            res.send().status(200);
        } catch (e) {
            console.log(e);
        }
    });
    app.get('/api/reviews', async (req, res) => {
        try {
            let reviews = await Review.find({});

            res.send(reviews).status(200);
        } catch (e) {
            console.log(e);
        }
    });
};
