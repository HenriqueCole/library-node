const express = require("express");
const router = express.Router();

const booksHandler = require("./books.handler");

router.post("/books", async (req, res) => {
  booksHandler
    .addBooks(req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/books", async (req, res) => {
  booksHandler
    .getBooks()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/books/:bookId", async (req, res) => {
  booksHandler
    .getBookById(req.params.bookId)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/books/:bookId", async (req, res) => {
  booksHandler
    .updateBooks(req.body, req.params.bookId)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.delete("/books/:bookId", async (req, res) => {
  booksHandler
    .deleteBook(req.params.bookId)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
