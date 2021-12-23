var express = require('express');
var router = express.Router();

const MarketSchema = require('../schema/market_schema');

// * GET all producks. 
router.get('/', async (req, res, next) => {
  var data = await MarketSchema.find({});
  res.send(data);
});

// * Post productk to db 
router.post('/', async (req, res, next) => {
  var data = await MarketSchema.create({
    name: req.body.name,
    price: req.body.price,
    category: req.body.category
  });
  res.send(data);
});

// * Update to db  
router.patch('/', async (req, res, next) => {
  var data = await MarketSchema.findOneAndUpdate(
    { name: req.body.oldName },
    {
      name: req.body.name,
      price: req.body.price,
      category: req.body.category
    },
    ({ new: true })
  );
  res.send(data);
});

// * delete to db  
router.delete('/', async (req, res, next) => {
  var data = await MarketSchema.findOneAndDelete(
    { name: req.body.oldName }
  );
  res.send(data);
});

module.exports = router;
