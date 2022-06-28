const crud = require("../../crud")

function addAuthors() {
    crud.get("authors")
}



module.exports = {
    addAuthors
}