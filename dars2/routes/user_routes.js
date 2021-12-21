const express = require('express');
const router = express.Router();

const User = require('../schema/user_schema');

var  users = [
    {
        "name" : "A",
        "age" : 1,
    },
    {
        "name" : "B",
        "age" : 2,
    },
    {
        "name" : "C",
        "age" : 3,
    }

    
];

router.get('/', async (req, res) => {
    var data = await User.find();
    res.send(data); 
});

router.post('/', async(req, res) => {
    var data = await User.create(
        {
            f_name : req.body.f_name,
            password : req.body.password
        },
    );
    res.json(data);
});


module.exports = router;