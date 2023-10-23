const mongoose = require('mongoose');

const DataPointSchema = new mongoose.Schema({
    user: String,
    amout: Number,
    description: String,
    date: Date,
    category: String,
    currency: String,
    id: String,
    datas: [{
        y: Date,
        x: Number,
        category: String,
    }]
});
const GraphModel = mongoose.model('DataGraph', DataPointSchema);

module.exports = GraphModel;


