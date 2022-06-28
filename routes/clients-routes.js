const express = require('express');
const router = express.Router();

const clients = require('../api/client/clients.controller');


router.use('/clients', clients);

router.get('/clients', (req, res) => {
  res.send('Hello clients!');
});

module.exports = router;