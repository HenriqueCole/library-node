const crud = require("../../crud");

async function addBooks(books) {
  const savedBooks = await crud.postBooks("books", null, books);
  return savedBooks;
}

async function getBooks() {
  const books = await crud.get("books");
  return books;
}

async function getBookById(bookId) {
  const book = await crud.getById("books", bookId);
  return book;
}

module.exports = {
  addBooks,
  getBooks,
  getBookById,
};
