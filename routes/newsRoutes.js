const _ = require('lodash');
const { ObjectID } = require('mongodb');

let { News } = require('./../models/news');
const { authenticate } = require('./../middleware/validateAuth');

module.exports = app => {
  app.post('/api/news', authenticate, async (req, res) => {
    try {
      let body = _.pick(req.body, ['title', 'headline', 'article']);
      let url = '/news/item/' + body.title;

      url = url.replace(/ /g, '-');
      body = {
        ...body,
        writer: req.user.username,
        url: url
      };

      let newsItem = new News(body);

      await newsItem.save();
      res.send().status(200);
    } catch (e) {
      console.log(e);
    }
  });

  app.get('/api/news', authenticate, async (req, res) => {
    try {
      let newsItems = await News.find({}).sort({ _id: -1 });

      res.send(newsItems).status(200);
    } catch (e) {
      console.log(e);
    }
  });

  app.get('/api/latest_news', authenticate, async (req, res) => {
    try {
      let news = await News.find({})
        .sort({ _id: -1 })
        .limit(3);

      res.send(news).status(200);
    } catch (e) {
      console.log(e);
    }
  });

  app.delete('/api/news', authenticate, async (req, res) => {
    try {
      let _id = req.body._id;

      if (!ObjectID.isValid(_id)) {
        return res.status(404).send();
      }

      let doc = await News.findOneAndDelete({
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

  app.patch('/api/news', authenticate, async (req, res) => {
    try {
      let newsToEdit = _.pick(req.body, [
        'title',
        'headline',
        'article'
      ]);
      let _id = req.body._id;

      if (!ObjectID.isValid(_id)) {
        return res.status(404).send();
      }

      let newsItem = await News.findOneAndUpdate(
        { _id: _id, writer: req.user.username },
        { $set: newsToEdit },
        { new: true }
      );

      res.status(200).send(newsItem);
    } catch (e) {
      console.log(e);
    }
  });
};
