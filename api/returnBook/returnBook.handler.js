const crud = require("../../crud");

const rentHandler = require("../rent/rent.handler");
const booksHandler = require("../book/books.handler");

async function getReturnedBooks() {
  const returnedBooks = await crud.get("returnedBooks");
  return returnedBooks;
}

async function returnBook(data) {
  const rents = await rentHandler.getRents();
  const books = await booksHandler.getBooks();

  if (Array.isArray(data.listBooksIds)) {
    data.listBooksIds.forEach((bookId) => {
      const book = books.find((book) => book.id === bookId);
      if (book.status === "rented") {
        book.status = "available";
        booksHandler.updateBooks(book, book.id);
      } else {
        throw {
          Error: "You can't return a book because it's not rented.",
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

  if (rentVerification == false) {
    throw {
      Error: "You don't have a book rented",
    };
  }

  const rent = {
    rentId: data.rentId,
    status: "inactive",
  };

  const savedRent = await rentHandler.updateRentStatus(
    rent.rentId,
    rent.status
  );

  const savedReturnedBook = await crud.post("returnedBooks", null, data);
  return savedReturnedBook;
}

async function getReturnedBookId(id) {
  const returnedBook = await crud.getById("returnedBooks", id);
  return returnedBook;
}

async function deleteReturnedBook(id) {
  const returnedBook = await getReturnedBookId(id);
  await crud.delete("returnedBooks", id);
  return returnedBook;
}

module.exports = {
  getReturnedBooks,
  returnBook,
  getReturnedBookId,
  deleteReturnedBook,
};
