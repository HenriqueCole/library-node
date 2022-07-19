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

  if (Array.isArray(data.listBooksIds)) {
    data.listBooksIds.forEach((bookId) => {
      const book = books.find((book) => book.id === bookId);
      if (book.status === "available") {
        book.status = "rented";
        booksHandler.updateBooks(book, book.id);
      } else {
        throw {
          Error: "You can't rent a book because it's not available.",
        };
      }
    });
  }

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

  const rent = {
    rentId: data.rentId,
    status: "active",
  };

  const savedRent = await rentHandler.updateRentStatus(
    rent.rentId,
    rent.status
  );

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
