const { User } = require('./../models/user');

const authenticate = async (req, res, next) => {
    try {
        let token = req.signedCookies['x-auth'];
        console.log(token);
        let user = await User.findWithToken(token);

        console.log(user);

        if (!user) {
            return Promise.reject();
        }

        req.user = user;
        req.token = token;
        next();
    } catch (e) {
        res.status(401).send();
        console.log(e);
    }
};

module.exports = { authenticate };
