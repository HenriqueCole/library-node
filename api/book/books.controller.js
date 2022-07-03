const express = require('express');
const router = express.Router();

const booksHandler = require('./books.handler');


router.get('/books', async (req, res) => {
    res.send('BOOKS is working! Use postman to test this endpoint');
});

router.post('/books', async (req, res) =>{
    booksHandler.addBooks(req.body)
    .then(result => {
        res.status(200).json(result);
    }
    ).catch(err => {
        res.status(500).json(err);
    }
    );
})


module.exports = router;
