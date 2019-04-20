const _ = require('lodash');
const { ObjectID } = require('mongodb');

let { Features } = require('./../models/features');
const { authenticate } = require('./../middleware/validateAuth');

module.exports = app => {
    app.post('/api/features', authenticate, async (req, res) => {
        try {
            let body = _.pick(req.body, ['title', 'headline', 'article']);
            let url = '/features/item/' + body.title;
            url = url.replace(/ /g, '-');

            body = {
                ...body,
                writer: req.user.username,
                url: url
            };

            let featuresItem = new Features(body);

            await featuresItem.save();
            res.send().status(200);
        } catch (e) {
            console.log(e);
        }
    });

    app.get('/api/features', authenticate, async (req, res) => {
        try {
            let featuresItems = await Features.find({}).sort({ _id: -1 });

            res.send(featuresItems).status(200);
        } catch (e) {
            console.log(e);
        }
    });

    app.patch('/api/features', authenticate, async (req, res) => {
        try {
            let featuresToEdit = _.pick(req.body, [
                'title',
                'headline',
                'article'
            ]);
            let _id = req.body._id;

            if (!ObjectID.isValid(_id)) {
                return res.status(404).send();
            }

            let featuresItem = await Features.findOneAndUpdate(
                { _id: _id, writer: req.user.username },
                { $set: featuresToEdit },
                { new: true }
            );

            res.status(200).send(featuresItem);
        } catch (e) {
            console.log(e);
        }
    });

    app.delete('/api/features', authenticate, async (req, res) => {
        try {
            let _id = req.body._id;

            if (!ObjectID.isValid(_id)) {
                return res.status(404).send();
            }

            let doc = await Features.findOneAndDelete({
                _id: _id
            });

            if (!doc) {
                return res.send().status(404);
            }

            res.send({ doc }).status(200);
        } catch (e) {
            console.log(e);
        }
    });
};
