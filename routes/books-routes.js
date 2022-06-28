const express = require('express');
const router = express.Router();

const books = require('../api/book/books.controller');


router.use('/books', books);

router.get('/books', (req, res) => {
  res.send('Hello books!');
});

module.exports = router;