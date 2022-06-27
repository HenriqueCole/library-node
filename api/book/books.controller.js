const express = require('express');
const router = express.Router();

const booksHandler = require('./books.handler');

router.get('/books', (req, res) => {
    res.send('Hello books!');
});

module.exports = router;