var express = require('express');
var cors = require('cors')

app = express();
app.use(cors())

port = process.env.PORT || 3000;
mongoose = require('mongoose')
calculator = require('./api/models/calculatorModel');
bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://teste:teste@cluster0.pwrnk.mongodb.net/teste?retryWrites=true&w=majority');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/calculatorRoutes');
routes(app);

app.listen(port);