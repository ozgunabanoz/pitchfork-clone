const _ = require('lodash');

let { User } = require('./../models/user');
const { authenticate } = require('./../middleware/validateAuth');

module.exports = app => {
    app.post('/api/post_user', async (req, res) => {
        try {
            let body = _.pick(req.body, ['username', 'email', 'password']);
            let user = new User(body);

            await user.save();
            res.status(200).send();
        } catch (e) {
            console.log(e);
        }
    });

    app.post('/api/login', async (req, res) => {
        try {
            let body = _.pick(req.body, ['username', 'password']);
            let user = await User.findByLoginCreds(body.username, body.password);
            let token = await user.generateToken();

            res.status(200)
                .cookie('x-auth', token, {
                    maxAge: 30 * 24 * 60 * 60 * 1000,
                    signed: true,
                    path: '/',
                    httpOnly: true,
                    secure: true
                })
                .send(user);
        } catch (error) {
            console.log(error);
        }
    });
};
