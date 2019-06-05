const express = require('express');
var bodyParser = require('body-parser');
const app = express();
var customer = require('./apimodule/customer');
var dashboard = require('./apimodule/dashboard');

//call midleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api',customer);
app.use('/api/dashboard',dashboard);

//set port for running
app.get('/',(req,res)=>{
    res.send('Hello My API');
});

const port = process.env.port || 3000;

// create express server
app.listen(port,console.log('Listen as port '+ port));