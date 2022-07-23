const express = require("express");
const router = express.Router();

const renteBookHandler = require("./rentBook.handler");

router.get("/rentedBooks", async (req, res) => {
  renteBookHandler
    .getRentedBooks()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/rentedBooks", async (req, res) => {
  renteBookHandler
    .rentBook(req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/rentedBooks/:id", async (req, res) => {
  renteBookHandler
    .getRentedBookId(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
