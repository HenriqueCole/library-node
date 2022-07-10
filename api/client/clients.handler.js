const crud = require("../../crud");

async function addClients(clients) {
  const savedClients = await crud.post("clients", null, clients);
  return savedClients;
}

async function getClients() {
  const clients = await crud.get("clients");
  return clients;
}

async function getBooksByClientId(clientId) {
  const booksRented = await crud.get(`clients/${clientId}/books`);
  return booksRented;
}

async function getClientById(clientId) {
  const client = await crud.getById("clients", clientId);
  return client;
}

module.exports = {
  addClients,
  getBooksByClientId,
  getClients,
  getClientById
};
