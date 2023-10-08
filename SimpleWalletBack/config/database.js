const mongoose = require('mongoose');

const dbURI = "mongodb+srv://admin:<admin>@atlascluster.qgnpu2r.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect( dbURI,
    { useNewUrlParser: true, 
    useUnifiedTopology: true 
});

const db = mongoose.connection;

db.on('error', (err) => {
    console.error('error connecing to MongoDB: ', err);
});

db.once('open', () => {
    console.log('connected to MongoDB');
});

module.exports = db;