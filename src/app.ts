import express from "express";
import { books } from "./modules/books/data.js";
import type { Book } from "./modules/books/types.js";

// creating an instance of an Express application
const app = express();

// middleware
// without express.json(), this app cannot access the request body from client
app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "ok",
        message: "Bookshelf API is running!"
    });
});

app.post("/echo", (req, res) => {
    console.log(req.body);
    res.status(200).json(req.body);
});

app.post("/books", (req, res) => {
    const newBook: Book = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    
    books.push(newBook);
    res.status(201).json(newBook);
});

app.get("/books", (req, res) => {
    res.status(200).json(books);
});

export default app;