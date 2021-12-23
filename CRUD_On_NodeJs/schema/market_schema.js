const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var marketSchem = new Schema({
    name : {
        type : String,
        unique : true,
        required : true,
        max : 30
    },
    price : Number,
    category :  String
});

module.exports = mongoose.model('Market' , marketSchem); 