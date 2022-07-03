const express = require('express');
const router = express.Router();

const clientsHandler = require('./clients.handler');


router.get('/clients', async (req, res) => {
    res.send('CLIENTS is working! Use postman to test this endpoint');
});

router.post('/clients', async (req, res) =>{
    clientsHandler.addClients(req.body)
    .then(result => {
        res.status(200).json(result);
    }
    ).catch(err => {
        res.status(500).json(err);
    }
    );
})

module.exports = router;
