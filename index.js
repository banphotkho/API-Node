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

// test acall back
console.log('Before');
const user = getUse(1,function(user){
    console.log('Get user:',user);
    getUserrule(user.id,(rule)=>{
        console.log('Get user rule',rule);
    });
});
console.log('After');


function getUse(id, callback){
    setTimeout(() => {
        console.log('Reading user form a database...');
        callback( {id:id, gitHubusername: 'banphot'});
    }, 2000);
};

//create function to return roll
function getUserrule(id,callback) {
    setTimeout(() => {
            console.log('Return user role');
            callback(['admin','user','super user']);
    }, 2000);
}





//set port for running
app.get('/',(req,res)=>{
    res.send('Hello My API');
});

const port = process.env.port || 3000;

// create express server
app.listen(port,console.log('Listen as port '+ port));