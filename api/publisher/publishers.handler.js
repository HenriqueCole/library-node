const crud = require("../../crud");

async function addPublishers(publishers) {
  const savedPublishers = await crud.post("publishers", null, publishers);
  return savedPublishers;
}

async function getPublishers() {
  const publishers = await crud.get("publishers");
  return publishers;
}

async function getPublisherById(publisherId) {
  const publisher = await crud.getById("publishers", publisherId);
  return publisher;
}

async function updatePublishers(publisherId, publisher) {
  const updatedPublisher = await crud.post(
    "publishers",
    publisherId,
    publisher
  );
  return updatedPublisher;
}

async function deletePublishers(publisherId) {
  const publisher = await crud.remove("publishers", publisherId);
  return publisher;
}

module.exports = {
  addPublishers,
  getPublishers,
  getPublisherById,
  updatePublishers,
  deletePublishers,
};
