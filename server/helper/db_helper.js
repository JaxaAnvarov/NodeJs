const mongoose = require('mongoose');

var personHelper = () => {
    var mongoDB = 'mongodb://127.0.0.1:27017/persons';
    mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
    // console.log("helll");
    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'MongoDB connection error:')); 
}

module.exports = personHelper;