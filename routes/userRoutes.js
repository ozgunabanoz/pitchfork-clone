const _ = require('lodash');

let { User } = require('./../models/user');

module.exports = app => {
    app.post('/register', async (req, res) => {
        try {
            let body = _.pick(req.body, ['email', 'password']);
            let user = new User(body);

            await user.save();
            res.send(user).status(200);
        } catch (e) {
            console.log(e);
        }
    });
};
