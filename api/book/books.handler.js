const crud = require("../../crud");

const authorHandler = require("../author/authors.handler");

async function addBooks(data) {
  const authors = await authorHandler.getAuthors();

  const book = {
    title: data.title,
    genre: data.genre,
    year: data.year,
    status: "available",
    authorsList: data.authorsList,
  };

  if (Array.isArray(data.authorsList)) {
    data.authorsList.forEach((authorId) => {
      const author = authors.find((author) => author.id === authorId);
      if (author) {
        book.authorsList.push(author);
      } else {
        throw {
          Error: "You can't add a book because the author doesn't exist.",
        };
      }
    }
    );
  }
  
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
