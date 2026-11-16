import express from "express";

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

export default app;