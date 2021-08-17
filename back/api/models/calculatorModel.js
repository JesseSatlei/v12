let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let calculatorSchema = Schema({
    operation: {
        type: String
    },
    nameCustomer: {
        type: String
    },
    time : { type : Date, default: Date.now }
});

module.exports = mongoose.model('calculator', calculatorSchema);