const express = require('express');
const router = express.Router();

const authors = require('../api/author/authors.controller');


router.use('/authors', authors);

router.get('/authors', (req, res) => {
  res.send('Hello authors!');
});

module.exports = router;