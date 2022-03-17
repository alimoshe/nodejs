const express = require('express');
const app = express();
const PORT = 5000;
const httpServer = require('http');
const bookModel = require('./models/book.model');
const mongoose = require('./services/mongo.service');


// Define JSON Middleware 
app.use(express.json());

// Define main Route form checking Create a book to Mongo Database 
app.get('/', (req, res) => {
    bookModel.createNewBook();
    res.status(200).send('Book Stored Successful');
});

app.get('/list', (req, res) => {
    const allBooks = bookModel.getAllBooks().then((data) => {
        console.log(data);
        res.status(200).json(data);
    });
})

app.post('/remove', (req, res) => {
    const bookId = req.body.bookId;
    const removeBook = bookModel.removeBook(bookId).then((data) => {
        console.log(data);
        res.status(200).json(data);
    })
})

app.get('/last', async (req, res) => {
    const lastBookReceived = await bookModel.getLastBookNumber();
    console.log(lastBookReceived);
    res.status(200).json(lastBookReceived);
})

const server = httpServer.createServer(app);

server.listen(PORT, () => {
    console.log(`Server is up and listening on port ${PORT}...`);
});