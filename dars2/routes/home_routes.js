const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("ROUTER");
    res.send("<h1 style='color : red'> JaxaAnvarov </h1>");
});

module.exports = router;