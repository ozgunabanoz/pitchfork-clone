const _ = require('lodash');
const { ObjectID } = require('mongodb');

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

    app.delete('/api/reviews', async (req, res) => {
        try {
            let _id = req.body._id;

            if (!ObjectID.isValid(_id)) {
                return res.status(404).send();
            }

            let doc = await Review.findOneAndDelete({
                _id: _id
            });

            if (!doc) {
                return res.send().status(404);
            }

            res.send({ doc }).status(200);
        } catch (e) {
            res.status(400).send(e);
        }
    });

    app.patch('/api/reviews', authenticate, async (req, res) => {
        try {
            let reviewToEdit = _.pick(req.body, [
                'albumArtist',
                'albumTitle',
                'genre',
                'review'
            ]);
            let _id = req.body._id;

            if (!ObjectID.isValid(_id)) {
                return res.status(404).send();
            }

            let review = await Review.findOneAndUpdate(
                { _id: _id, writer: req.user.username },
                { $set: reviewToEdit },
                { new: true }
            );

            res.status(200).send(review);
        } catch (e) {}
    });
};
