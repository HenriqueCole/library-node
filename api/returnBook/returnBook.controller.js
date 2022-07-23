const express = require("express");
const router = express.Router();

const returnBookHandler = require("./returnBook.handler");

router.get("/returnedBooks", async (req, res) => {
  returnBookHandler
    .getReturnedBooks()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/returnedBooks", async (req, res) => {
  returnBookHandler
    .returnBook(req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/returnedBooks/:id", async (req, res) => {
  returnBookHandler
    .getReturnedBookId(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.delete("/returnedBooks/:id", async (req, res) => {
  returnBookHandler
    .deleteReturnedBook(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
