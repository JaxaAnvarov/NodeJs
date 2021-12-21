const express = require('express');
const morgan = require('morgan');

const users = require('./routes/user_routes');
const home = require('./routes/home_routes');

var bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(morgan('tiny'));

app.use('/users', users);
app.use('/', home);

app.listen(3000);