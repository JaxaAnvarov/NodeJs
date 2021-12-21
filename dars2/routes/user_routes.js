const express = require('express');
const router = express.Router();

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

router.get('/', (req, res) => {
    console.log(req.params.id);
    res.json(users);
    res.end();
});

router.post('/', (req, res) => {
    const newUser = {
        name : req.body.name,
        age :req.body.age
    }

    users.push(newUser);
    res.json(newUser);
    res.end();
});


module.exports = router;