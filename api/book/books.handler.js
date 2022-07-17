const crud = require("../../crud");

async function addBooks(books) {
  const book = {
    title: books.title,
    genre: books.genre,
    year: books.year,
    status: "available"
  };
  const savedBook = await crud.post("books", null, book);
  return savedBook;
}

async function updateBooks(books) {
  const savedBooks = await crud.put("books", books.id, books);
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

async function updateStatus(id, status) {
  const book = await getBookById(id);
  book.status = status;
  await updateBooks(book);
  return book;
}

module.exports = {
  addBooks,
  getBooks,
  getBookById,
  updateStatus,
  updateBooks
};
