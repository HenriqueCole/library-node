const crud = require("../../crud")

async function addAuthors(authors) {
    const savedAuthor = await crud.post("authors", null, authors);
    return savedAuthor;
}



module.exports = {
    addAuthors
}