//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

//Controllers
var ProductCtrl = require('./controllers/ProductCtrl');

//Express
var app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

// Routes
app.post('/product', ProductCtrl.create);
app.get('/product', ProductCtrl.read);
app.put('/product/:id', ProductCtrl.update);
app.delete('/product/:id', ProductCtrl.delete);

//API connection
var port = 3000;
var mongoUri = 'mongodb://localhost:27017/ecommerce-mongoose';

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('connected to mongoDB at: ', mongoUri);
});

app.listen(port, function() {
    console.log("listening on port " + port)
});