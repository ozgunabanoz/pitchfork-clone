require('./config/config_keys');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

let { mongoose } = require('./db/mongoose');
require('./models/user');
require('./models/reviews');
require('./models/news');

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SIGN));

require('./routes/userRoutes')(app);
require('./routes/reviewRoutes')(app);
require('./routes/newsRoutes')(app);
require('./routes/featuresRoutes')(app);

app.listen(PORT);
