const mongoose = require('mongoose');

const connectionString = 'mongodb://mongo:27017/blahdiblah';

mongoose
    .connect(connectionString, { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to MongoDB!');
    })
    .catch((e) => {
        console.log('failed connection');
        console.error('Connection error', e.message);
    })

const db = mongoose.connection;

module.exports = db;
