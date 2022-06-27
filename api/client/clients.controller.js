const express = require('express');
const router = express.Router();

const clientsHandler = require('./clients.handler');

router.get('/authors', (req, res) => {
    res.send('Hello clients!');
});

module.exports = router;