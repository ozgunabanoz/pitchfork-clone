const _ = require('lodash');

let { Review } = require('./../models/reviews');
const { authenticate } = require('./../middleware/validateAuth');

module.exports = app => {
    // make the routes secured (requiring authentication)
    app.post('/api/reviews', authenticate, async (req, res) => {
        try {
            let body = _.pick(req.body, [
                'albumTitle',
                'albumArtist',
                'genre',
                'review'
            ]);
            body = {
                ...body,
                writer: req.user.username
            };
            let review = new Review(body);

            await review.save();
            res.send().status(200);
        } catch (e) {
            console.log(e);
        }
    });
    app.get('/api/reviews', authenticate, async (req, res) => {
        try {
            let reviews = await Review.find({});

            res.send(reviews).status(200);
        } catch (e) {
            console.log(e);
        }
    });
};
