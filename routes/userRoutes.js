const _ = require('lodash');

let { User } = require('./../models/user');

module.exports = app => {
    app.post('/post_user', async (req, res) => {
        try {
            let body = _.pick(req.body, ['username', 'email', 'password']);
            let user = new User(body);

            await user.save();
            let token = await user.generateToken();
            res.status(200)
                .cookie('x-auth', token, {
                    maxAge: 30 * 24 * 60 * 60 * 1000,
                    signed: true,
                    path: '/',
                    httpOnly: true, // can't access cookies on the client side, correct this!
                    secure: true
                })
                .send(user);
        } catch (e) {
            console.log(e);
        }
    });
};
