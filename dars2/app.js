const express = require('express');
const morgan = require('morgan');

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/users');

var db = mongoose.connection;



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