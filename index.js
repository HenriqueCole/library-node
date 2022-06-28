const express = require('express');
const cors = require('cors');

const authorsRoute = require('./routes/authors-routes');
const booksRoute = require('./routes/books-routes');
const clientsRoute = require('./routes/clients-routes');
const publishersRoute = require('./routes/publishers-routes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', authorsRoute);
app.use('/api', booksRoute);
app.use('/api', clientsRoute);
app.use('/api', publishersRoute);

app.listen(8080, () => { console.log('App listen on http://localhost:8080') });