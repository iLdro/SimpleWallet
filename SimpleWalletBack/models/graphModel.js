const mongoose = require('mongoose');

const DataPointSchema = new mongoose.Schema({
    id: String,
    datas: [{
        y: Date,
        x: Number
    }]
});
const GraphModel = mongoose.model('DataGraph', DataPointSchema);

module.exports = GraphModel;


