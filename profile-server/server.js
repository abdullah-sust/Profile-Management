const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 8000;
const url = 'mongodb://localhost:27017/mydb';
// const routes = require('./routes/api');
// app.get('/',function(req, res){
// 	console.log('GET');
// 	res.send({name: "Abdullah"});
// });
// app.get('/api',function(req, res){
// 	console.log('GET');
// 	res.send({name: "API"});
// });
mongoose.connect("mongodb://localhost/profile-db");
mongoose.Promise = global.Promise;
app.use(bodyParser.json());
app.use('/api', require('./routes/api'));

app.listen(port, (request, response) => {
    console.log('listening...' + port);
});


// app.use(bodyParser.urlencoded({ extended: true}));

console.log('Successfully connected!');




