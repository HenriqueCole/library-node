const crud = require("../../crud");

async function getRents() {
  const rents = await crud.get("rents");
  return rents;
}

//data is the information inserted on postman
//dataStatusClientId is the information from the database
async function addRent(data) {
  const rents = await getRents();
  

  let rentVerification = rents.some((dataStatusClientId) => {
    if (
      dataStatusClientId.status === "active" &&
      dataStatusClientId.clientId === data.clientId
    ) {
      return true;
    } else {
      return false;
    }
  });

  if (rentVerification == true) {
    throw {
      Error: "You can't rent a book because you already have a book rented.",
    };
  }

  const rent = {
    clientId: data.clientId,
    status: "active",
  };

  rent.status = "active";

  const savedRent = await crud.post("rents", null, rent);

  return savedRent;
}

async function getRentById(id) {
  const rent = await crud.getById("rents", id);
  return rent;
}

async function updateRentStatus(id, status) {
  const rent = await getRentById(id);
  rent.status = status;
  await updateRent(rent, id);
  return rent;
}

async function updateRent(rent, id) {
  const updatedRent = await crud.post("rents", id, rent);
  return updatedRent;
}

module.exports = {
  getRents,
  addRent,
  updateRentStatus,
  updateRent
};
