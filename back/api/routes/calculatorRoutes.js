module.exports = function(app) {
    let calculator = require('../controllers/calculatorController');

    app.route('/calculator')
        .get(calculator.listAll)
        .post(calculator.createCalculator)
    
}