const crud = require("../../crud");


async function getRentedBooks() {
  const renteBooks = await crud.get("rentedBooks");
  return renteBooks;
}

async function renteBook(renteBooks) {
  const savedRenteBooks = await crud.post("rentedBooks", null, renteBooks);
  return savedRenteBooks;
}

async function getRentedBookId(id){
  const rentedBook = await crud.getById("rentedBooks", id);
  return rentedBook;
}

module.exports = {
  getRentedBooks,
  renteBook,
  getRentedBookId
};