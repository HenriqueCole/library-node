const crud = require("./crud");

async function searchDatas() {
  const datas = await crud.get("authors");
  console.log(datas);
}

async function addAuthor() {
  const author = {
    name: "Henrique Cole",
    age: "17",
  };
  const savedAuthor = await crud.post("authors", null, author);
  console.log(savedAuthor);
}

addAuthor();
