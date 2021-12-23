const express = require('express');
const router = express.Router();

const personSchema = require('../schema/persons_schema');

router.get('/', async(req, res) => {
    var data = await personSchema.find({});
    res.send(data);
});

router.post('/', async(req, res) => {
    var data = await personSchema.create({
        name : req.body.name,
        surname : req.body.surname,
        age : req.body.age,
        price : req.body.price
    });
    res.send(data);
});

module.exports = router;