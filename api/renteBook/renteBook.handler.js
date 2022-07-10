const crud = require("../../crud");


async function getRentedBooks() {
  const renteBooks = await crud.get("renteBooks");
  return renteBooks;
}

async function renteBook(renteBooks) {
  const savedRenteBooks = await crud.post("renteBooks", null, renteBooks);
  return savedRenteBooks;
}

module.exports = {
  getRentedBooks,
  renteBook
};