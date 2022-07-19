const express = require("express");
const router = express.Router();

const authorsHandler = require("./authors.handler");

router.post("/authors", async (req, res) => {
  authorsHandler
    .addAuthors(req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/authors", async (req, res) => {
  authorsHandler
    .getAuthors()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/authors/:id", async (req, res) => {
  authorsHandler
    .getAuthorById(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.delete("/authors/:id", async (req, res) => {
  authorsHandler
    .deleteAuthor(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put("/authors/:id", async (req, res) => {
  authorsHandler
    .updateAuthor(req.params.id, req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
