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
//call back 
//const user = getUse(1,function(user){
//    console.log('Get user:',user);
//    getUserrule(user.id,(rule)=>{
//        console.log('Get user rule',rule);
//    });
//});
// consume Promise 
//  getUse(1)
//        .then(user => getUserrule(user.gitHubusername))
//        .then(gitUsername => console.log('Role name',gitUsername[0])).catch(err => console.log('Error'));

// console.log('After');

// implement await
async function displayrole(){
    try {
        const user = await getUse(1);
        const getuser = await getUserrule(user.gitHubusername);
        console.log(getuser[0]);    
    } catch (error) {
        console.log('error', error.message);
    }
}
// call function async
displayrole();

function getUse(id){
    return new Promise((resove,reject)=>{
        setTimeout(() => {
            console.log('Reading user form a database...');
            resove( {id:id, gitHubusername: 'banphot'});
            
        }, 2000);
    });   
}

//create function to return roll
function getUserrule(id) {
    return new Promise((resove,reject)=>{
        setTimeout(() => {
            console.log('Return user role');

            resove(['admin','user','super user']);
           //reject(new Error('Same colud not report')); // semulator error
    }, 2000);
   });
    
}


//set port for running
app.get('/',(req,res)=>{
    res.send('Hello My API');
});

const port = process.env.port || 3000;

// create express server
app.listen(port,console.log('Listen as port '+ port));