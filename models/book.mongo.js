const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookNumber: {
        type: Number,
        default: 1,
        required: true,
    },
    isbn: {
        type: String,
        default: '',
        required: true,
    },
    insertDate: {
        type: Date,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },

    customers: [String]
})

module.exports = mongoose.model('Book', bookSchema);