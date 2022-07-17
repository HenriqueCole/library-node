const crud = require("../../crud");

const booksHandler = require("../book/books.handler");
const rentHandler = require("../rent/rent.handler");

async function getRentedBooks() {
  const renteBooks = await crud.get("rentedBooks");
  return renteBooks;
}

async function renteBook(data) {
  const books = await booksHandler.getBooks();

  let bookVerification = books.some((book) => {
    if (book.id != data.bookId && book.status === "rented") {
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
 
  const newBook = {
    bookId: data.bookId,
    status: "rented"
  };
  
  const savedBook = await booksHandler.updateStatus(newBook)
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
