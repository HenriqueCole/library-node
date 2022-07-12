const crud = require("../../crud");

const booksHandler = require("../book/books.handler");
const rentHandler = require("../rent/rent.handler");

async function getRentedBooks() {
  const renteBooks = await crud.get("rentedBooks");
  return renteBooks;
}

async function renteBook(data) {
  const books = await booksHandler.getBooks();
  // const rents = await rentHandler.getRents();

  let bookVerificiation = books.some((dataStatusBook) => {
    if (dataStatusBook.status === "rented") {
      return true;
    } else {
      return false;
    }
  });

  // let rentVerification = rents.some((dataRent) => {
  //   if (
  //     dataRent.status === "active" &&
  //     dataRent.clientId === data.clientId
  //     ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

  if (bookVerificiation == true) {
    throw { Error: "You can't rent this book because it's already rented." };
  }

  // if (rentVerification == true) {
  //   throw { Error: "You can't rent this book because you already have a book rented." };
  // }

  const book = {
    bookId: data.bookId,
    status: "rented",
    genrer: data.genrer,
    title: data.title,
    year: data.year
  };

  // const rent = {
  //   clientId: data.clientId,
  //   status: "active",
  // };

  book.status = "rented";
  // rent.status = "active";

  const savedRenteBooks = await crud.post("rentedBooks", null, renteBooks);
  // const savedRent = await crud.post("rents", null, rent);
  return savedRenteBooks;
}

async function getRentedBookId(id) {
  const rentedBook = await crud.getById("rentedBooks", id);
  return rentedBook;
}

module.exports = {
  getRentedBooks,
  renteBook,
  getRentedBookId,
};
