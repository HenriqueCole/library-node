const express = require("express");
const router = express.Router();

const clientsHandler = require("./clients.handler");

router.post("/clients", async (req, res) => {
  clientsHandler
    .addClients(req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/clients", async (req, res) => {
  clientsHandler
    .getClients()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/clients/:clientId", async (req, res) => {
  clientsHandler
    .getClientById(req.params.clientId)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
