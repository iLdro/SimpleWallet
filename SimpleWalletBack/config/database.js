const mongoose = require('mongoose');
require('dotenv').config();

const dbURI = process.env.DBURI;


mongoose.connect( dbURI,
    { useNewUrlParser: true, 
    useUnifiedTopology: true 
});

const db = mongoose.connection;

db.on('error', (err) => {
    console.log(dbURI)
    console.error('error connecing to MongoDB: ', err);
});

db.once('open', () => {
    console.log('connected to MongoDB');
});

module.exports = db;