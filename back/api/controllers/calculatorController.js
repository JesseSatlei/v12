let mongoose = require('mongoose');
let calculator = mongoose.model('calculator');

// Get All
exports.listAll = function (req, res) {
    calculator.find({ }, function(err, calculators) {
        if (err) {
            res.send(err);
        }
        res.json(calculators);
    });
}

// Post
exports.createCalculator = function (req, res) {
    new_calculator = new calculator(req.body);
    new_calculator.save(function (err, livro) {
        if (err) {
            res.send(err);
        }
        res.send(livro);
    });
}