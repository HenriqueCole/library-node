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

module.exports = {
  getRents,
  addRent,
};
