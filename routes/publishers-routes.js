const express = require('express');
const router = express.Router();

const publishers = require('../api/publisher/publishers.controller');


router.use('/publishers', publishers);

router.get('/publishers', (req, res) => {
  res.send('Hello publishers!');
});

module.exports = router;