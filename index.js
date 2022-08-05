const express = require("express");
const cors = require("cors");

const authorsRoute = require("./api/author/authors.controller");
const booksRoute = require("./api/book/books.controller");
const clientsRoute = require("./api/client/clients.controller");
const publishersRoute = require("./api/publisher/publishers.controller");
const rentBookRoute = require("./api/rentBook/rentBook.controller");
const rentRoute = require("./api/rent/rent.controller");
const returnBookRoute = require("./api/returnBook/returnBook.controller");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", authorsRoute);
app.use("/api", booksRoute);
app.use("/api", clientsRoute);
app.use("/api", publishersRoute);
app.use("/api", rentBookRoute);
app.use("/api", rentRoute);
app.use("/api", returnBookRoute);

app.listen(8080, () => {
  console.log("App listen on http://localhost:8080");
});
