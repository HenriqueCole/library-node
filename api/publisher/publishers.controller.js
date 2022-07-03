const express = require('express');
const router = express.Router();

const publishersHandler = require('./publishers.handler');


router.get('/publishers', async (req, res) => {
    res.send('PUBLISHERS is working! Use postman to test this endpoint');
});

router.post('/publishers', async (req, res) =>{
    publishersHandler.addPublishers(req.body)
    .then(result => {
        res.status(200).json(result);
    }
    ).catch(err => {
        res.status(500).json(err);
    }
    );
})

module.exports = router;
