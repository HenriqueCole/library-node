const crud = require("../../crud");

async function addBooks(books) {
  const book = {
    title: books.title,
    genre: books.genre,
    year: books.year,
    status: "available",
  };
  const savedBook = await crud.post("books", null, book);
  return savedBook;
}

async function updateBooks(book, id) {
  const updatedBook = await crud.post("books", id, book);
  return updatedBook;
}

async function getBooks() {
  const books = await crud.get("books");
  return books;
}

async function getBookById(bookId) {
  const book = await crud.getById("books", bookId);
  return book;
}

async function updateStatus(id, status) {
  const book = await getBookById(id);
  book.status = status;
  await updateBooks(book, id);
  return book;
}

module.exports = {
  addBooks,
  getBooks,
  getBookById,
  updateStatus,
  updateBooks,
};
