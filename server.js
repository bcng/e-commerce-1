//Dependencies
var express = require('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');
var cors = require('cors');

//Express
var app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

//Run mongod
var db = mongojs('store', ['products']);

app.post('/api/products', function(req, res){
    console.log('post hit');
    res.end();
})
app.get('/api/products', function(req, res){
    console.log('get hit');
    res.end();
})
app.delete('/api/products', function(req, res){
    console.log('delete hit');
    res.end();
})
app.put('/api/products', function(req, res){
    console.log('put hit');
    res.end();
})

//API connection
var port = 3000;
app.listen(port, function() {
    console.log("listening on port " + port)
});