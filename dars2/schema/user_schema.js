const mongoose = require('mongoose')

var userSchema = mongoose.Schema({
    'f_name': String,
    'password': String
});

module.exports = mongoose.model('Users', userSchema);