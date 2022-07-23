const express = require("express");
const router = express.Router();

const publishersHandler = require("./publishers.handler");

router.post("/publishers", async (req, res) => {
  publishersHandler
    .addPublishers(req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/publishers", async (req, res) => {
  publishersHandler
    .getPublishers()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/publishers/:publisherId", async (req, res) => {
  publishersHandler
    .getPublisherById(req.params.publisherId)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/publishers/:publisherId", async (req, res) => {
  publishersHandler
    .updatePublishers(req.body, req.params.publisherId)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.delete("/publishers/:publisherId", async (req, res) => {
  publishersHandler
    .deletePublishers(req.params.publisherId)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
