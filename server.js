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
    db.products.save(req.body, function(err, result) {
        if (!err) {
            res.json(result);
        } else {
            return res.status(500).json(err);
        }
    });
    console.log('post hit');
})
app.get('/api/products', function(req, res){
    db.products.find(req.query, function(err, result) {
        if (err) {
            return res.status(500).json(err);
        } else {
            res.json(result);
        }
    });
    console.log('get hit');
})
app.delete('/api/products', function(req, res){
    db.products.remove(req.query, function(err, result) {
        if (!err) {
            res.json(result);
        } else {
            res.status(418).json(err);
        }
    })
    console.log('delete hit');
})
app.put('/api/products', function(req, res){
    db.products.update(req.query, req.body, function(err, result) {
    	if (!err) {
    		res.json(result);
    	} else {
    		res.status(418).son(err);
    	}
    })
    console.log('put hit');
})

//API connection
var port = 3000;
app.listen(port, function() {
    console.log("listening on port " + port)
});