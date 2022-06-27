const express = require('express');
const router = express.Router();

const publishersHandler = require('./publishers.handler');

router.get('/authors', (req, res) => {
    res.send('Hello publishers!');
});

module.exports = router;