const express = require("express");
const router = express.Router();

const rentHandler = require("./rent.handler");

router.get("/rents", async (req, res) => {
  rentHandler
    .getRents()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/rents/:rentId", async (req, res) => {
  rentHandler
    .getRentById(req.params.rentId)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/rents", async (req, res) => {
  rentHandler
    .addRent(req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/rents/:rentId", async (req, res) => {
  rentHandler
    .updateRent(req.body, req.params.rentId)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.delete("/rents/:rentId", async (req, res) => {
  rentHandler
    .deleteRent(req.params.rentId)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
