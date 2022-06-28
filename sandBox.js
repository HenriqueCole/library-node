const crud = require('./crud');

async function searchDatas(){
  const datas = await crud.get('people');
  console.log(datas);
}

async function addAuthor(){
  const author = {
    name: 'John Doe',
    age: '30'
  }
  const savedAuthor = await crud.save('people', 1, author);
  console.log(savedAuthor);
}

addAuthor();