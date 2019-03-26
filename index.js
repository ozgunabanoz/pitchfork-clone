require('./config/config_keys');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

let { mongoose } = require('./db/mongoose');
require('./models/user');

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SIGN));

require('./routes/userRoutes')(app);

app.listen(PORT);
