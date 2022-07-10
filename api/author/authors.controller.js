const express = require('express');
const router = express.Router();

const authorsHandler = require('./authors.handler');

router.post('/authors', async (req, res) =>{
    authorsHandler.addAuthors(req.body)
    .then(result => {
        res.status(200).json(result);
    }
    ).catch(err => {
        res.status(500).json(err);
    }
    );
})


module.exports = router;
