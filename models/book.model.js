
const bookModel = require('./book.mongo');

const sampleBook = {
    bookNumber: 10,
    isbn: '145441',
    insertDate: Date.now(),
    author: 'Alireza Salehi',
    customers: ['ISEIKCO', 'IKK']
}
async function getLastBookNumber() {
    const lastBook = await bookModel.findOne({}).sort('-bookNumber');
    let lastNumber = 0;
    if (lastBook.length > 0) {
        lastNumber = Number(lastBook.bookNumber) + 1;
    } else {
        lastNumber = 1;
    }
    return lastNumber;
}
async function getAllBooks() {
    return await bookModel.find({}, {
        '_id': 0, '__v': 0
    });
}
async function getDelta() {
    //TODO must be implement 
}
async function createNewBook() {
    //lastNumber = await getLastBookNumber();
    return await bookModel.create({
        bookNumber: 10,
        isbn: '55740',
        insertDate: Date.now(),
        author: 'Fatemeh Salehi',
        customers: ['ISEIKCO', 'IKTAB', 'IKK', 'IKF']
    });


}

async function removeBook(bookId) {
    const bookFound = await bookModel.find({ bookNumber: bookId });

    if (!bookFound || bookFound.length < 1) {
        return ({
            ok: false
        })
    }
    await bookModel.remove({
        bookNumber: bookId,
    });
    return ({
        ok: true
    })
}
module.exports = {
    getAllBooks,
    createNewBook,
    removeBook,
    getLastBookNumber,
}