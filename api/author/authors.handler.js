const crud = require("../../crud");

async function addAuthors(authors) {
  const savedAuthor = await crud.post("authors", null, authors);
  return savedAuthor;
}

async function getAuthors() {
  const authors = await crud.get("authors");
  return authors;
}

async function getAuthorById(authorId) {
  const author = await crud.getById("authors", authorId);
  return author;
}

async function deleteAuthor(authorId) {
  const author = await crud.remove("authors", authorId);
  return author;
}

async function updateAuthor(authorId, author) {
  const updatedAuthor = await crud.post("authors", authorId, author);
  return updatedAuthor;
}

module.exports = {
  addAuthors,
  getAuthors,
  getAuthorById,
  deleteAuthor,
  updateAuthor,
};
