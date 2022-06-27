const express = require('express');
const router = express.Router();

const authorsHandler = require('./authors.handler');

router.get('/authors', (req, res) => {
    res.send('Hello authors!');
});

module.exports = router;