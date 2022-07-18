const crud = require("../../crud");

const booksHandler = require("../book/books.handler");
const rentHandler = require("../rent/rent.handler");

async function getRentedBooks() {
  const renteBooks = await crud.get("rentedBooks");
  return renteBooks;
}

async function renteBook(data) {
  const books = await booksHandler.getBooks();
  const rents = await rentHandler.getRents();

  let rentVerification = rents.some((rent) => {
    if (rent.id == data.rentId && rent.status === "active") {
      return true;
    } else {
      return false;
    }
  });

  if (rentVerification == true) {
    throw {
      Error: "YOU ALREADY HAVE A BOOK RENTED",
    };
  }

  let bookVerification = books.some((book) => {
    if (book.id == data.listBooksIds && book.status === "rented") {
      return true;
    } else {
      return false;
    }
  });

  if (bookVerification == true) {
    throw {
      Error: "BOOK ALREADY RENTED",
    };
  }

  const rent = {
    rentId: data.rentId,
    status: "active",
  };

  const book = {
    bookId: data.listBooksIds,
    status: "rented",
  };

  const savedBook = await booksHandler.updateStatus(book.bookId, book.status);
  const savedRent = await rentHandler.updateRentStatus(rent.rentId, rent.status);
  
  const savedRentBook = await crud.post("rentedBooks", null, data);
  return savedRentBook;
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
