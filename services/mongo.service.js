const mongoose = require('mongoose');
const MONGO_URL = 'mongodb+srv://engsalehi:t-rEX110@cluster0.xz6ev.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(MONGO_URL, {
    autoIndex: true
});

mongoose.connection.once('open', () => {
    console.log('database  connection successfully Stablish !');
})

mongoose.connection.on('error', (err) => {
    console.error(err);
})

mongoose.connection.on('close', () => {
    console.log('database link was closed ');
})

module.exports = mongoose;