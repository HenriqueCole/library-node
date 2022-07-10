const express = require("express");
const router = express.Router();

const renteBookHandler = require("./renteBook.handler");

router.get("/renteBooks", async (req, res) => {
  renteBookHandler
    .getRentedBooks()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/renteBooks", async (req, res) => {
  renteBookHandler
    .renteBook(req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});


module.exports = router;
