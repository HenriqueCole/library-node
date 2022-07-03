const crud = require("../../crud")

async function addBooks(books) {
    const savedBooks = await crud.post("books", null, books);
    return savedBooks;
}



module.exports = {
    addBooks
}