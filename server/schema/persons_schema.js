const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    name : {
        type : String,
        unique : true,
        required : true,
        max : 30
    },
    surname : {
        type : String,
        required : true,
    },
    age : Number,
    price :  Number
});

module.exports = mongoose.model('Person' , personSchema); 